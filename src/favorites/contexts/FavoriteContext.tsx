import React, { useEffect, useState } from "react";
import { PokemonsDetails } from "../../pokemon/types/pokemonDetail";

interface FavoriteContextProps {
  favorites: PokemonsDetails[];
  setFavorites: React.Dispatch<React.SetStateAction<PokemonsDetails[]>>;
}
const FAVORITES_LOCAL_STORAGE_KEY = "favorites";

function getFavoritesFromLocalStorage(): PokemonsDetails[] {
  const favoritesData = localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY);
  if (favoritesData) {
    return JSON.parse(favoritesData);
  }
  return [];
}

function saveFavoritesToLocalStorage(favorites: PokemonsDetails[]) {
  localStorage.setItem(FAVORITES_LOCAL_STORAGE_KEY, JSON.stringify(favorites));
}

const INITIAL_FAVORITES_VALUE: PokemonsDetails[] = [];

export const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: INITIAL_FAVORITES_VALUE,
  setFavorites: () => console.warn("setFavorites is not ready"),
});


export const FavoriteProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [favorites, setFavorites] = useState<PokemonsDetails[]>(getFavoritesFromLocalStorage());
  
  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

