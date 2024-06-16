import { Dispatch } from '@reduxjs/toolkit';
import { favoritesActions } from './favorites-slice';

export const toggleFavorite = (id: string) => {
  return (dispatch: Dispatch) => {
    const store = localStorage.getItem('favoritePartners');
    const storedFavorites: string[] = store ? JSON.parse(store) : [];
    const existingIndex = storedFavorites.indexOf(id);
    
    if (existingIndex === -1) {
      localStorage.setItem('favoritePartners', JSON.stringify([...storedFavorites, id]));
      dispatch(favoritesActions.addFavorite(id));
    } else {
      localStorage.setItem('favoritePartners', JSON.stringify(storedFavorites.filter(storedId => storedId !== id)));
      dispatch(favoritesActions.removeFavorite(id));
    }
  };
};
