import React, { useEffect, useState } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import { fetchArtworks } from '../api/apiService';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { Artwork } from '../types';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ArtworksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

const HomePage: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getArtworks = async () => {
      setLoading(true);
      const data = await fetchArtworks();
      setArtworks(data);
      setFilteredArtworks(data);
      setLoading(false);
    };

    getArtworks();
  }, []);

  const handleSearch = (query: string) => {
    if (query === '') {
      setFilteredArtworks(artworks);
    } else {
      const filtered = artworks.filter((artwork) =>
        artwork.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArtworks(filtered);
    }
  };

  const handleAddToFavorites = (artwork: Artwork) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  console.log('Избранное до добавления:', favorites);
  
  const exists = favorites.find((fav: Artwork) => fav.id === artwork.id);
  
  if (!exists) {
    const artworkToSave = {
      id: artwork.id,
      title: artwork.title,
      imageUrl: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
    };
    
    favorites.push(artworkToSave);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Избранное после добавления:', favorites);
  }
};

  
  


  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <HomePageWrapper>
      <SearchBar onSearch={handleSearch} />
      <ArtworksWrapper>
        {filteredArtworks.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            artwork={{
              id: artwork.id,
              title: artwork.title,
              imageUrl: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
            }}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </ArtworksWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
