import React, { useEffect, useState } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import styled from 'styled-components';
import { Artwork } from '../types';

const FavouritesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const NoFavoritesMessage = styled.div`
  font-size: 1.5rem;
  color: #666;
  margin-top: 20px;
`;

const Favourites: React.FC = () => {
  const [favorites, setFavorites] = useState<Artwork[]>([]);

  useEffect(() => {
    const favoriteArtworks = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log('Загруженные избранные картины из localStorage:', favoriteArtworks);
    
    if (Array.isArray(favoriteArtworks)) {
      setFavorites(favoriteArtworks);
    }
  }, []);
  
  

  return (
    <FavouritesWrapper>
      {favorites.length === 0 ? (
        <NoFavoritesMessage>У вас пока нет избранных картин.</NoFavoritesMessage>
      ) : (
        favorites.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            onAddToFavorites={() => {}} 
          />
        ))
      )}
    </FavouritesWrapper>
  );
};

export default Favourites;
