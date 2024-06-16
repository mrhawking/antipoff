import { createSlice } from '@reduxjs/toolkit';

const storedFavorites = localStorage.getItem('favoritePartners');

type favoritesType = {
  favorites: string[];
};

const initialFavotitesState: favoritesType = {
  favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavotitesState,
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      const index = state.favorites.indexOf(action.payload);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    }
  }
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;