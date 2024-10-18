import React, { useState } from 'react';
import styled from 'styled-components';
import { Artwork } from '../types';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  max-width: 300px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 12px 0;
  color: #333;
  text-align: center;
`;

const FavoriteButton = styled.button`
  background-color: #0073e6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin-top: 12px;

  &:hover {
    background-color: #005bb5;
  }

  &:active {
    transform: scale(0.98);
  }
`;

interface ArtworkCardProps {
  artwork: Artwork;
  onAddToFavorites: (artwork: Artwork) => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onAddToFavorites }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <CardWrapper onClick={openModal}>
        <Image src={artwork.imageUrl || ''} alt={artwork.title} />
        <Title>{artwork.title}</Title>
        <FavoriteButton onClick={(e) => {
          e.stopPropagation(); 
          onAddToFavorites(artwork);
        }}>
          Добавить в избранное
        </FavoriteButton>
      </CardWrapper>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Детали картины"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '100vh', 
            overflowY: 'auto', 
            padding: '20px', 
            backgroundColor: '#fff',
            borderRadius: '10px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
        shouldCloseOnOverlayClick={true}
      >
        <h2>{artwork.title}</h2>
        <Image src={artwork.imageUrl || ''} alt={artwork.title} />
        <p>{artwork.title || 'Описание отсутствует'}</p>
        
        <button onClick={closeModal}>Закрыть</button>
      </Modal>
    </>
  );
};

export default ArtworkCard;
