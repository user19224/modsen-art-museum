import { Artwork } from '../types';

export const fetchArtworks = async (): Promise<Artwork[]> => {
    try {
      const response = await fetch('https://api.artic.edu/api/v1/artworks');
      const data = await response.json();
  
      return data.data.map((artwork: any) => ({
        id: artwork.id,
        title: artwork.title,
        image_id: artwork.image_id,
      }));
    } catch (error) {
      console.error('Ошибка при загрузке данных о картинах:', error);
      return [];
    }
  };
  
  