import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonListInterface } from "../../pokemon/services/listPokemons";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PokemonsDetails } from "../../pokemon/types/pokemonDetail";
import { Chip } from "@mui/material";
import { FavoriteContext } from "../../favorites/contexts/FavoriteContext";

interface PokedexCardsProps {
  pokemon: PokemonsDetails;
}

export const PokedexCards: React.FC<PokedexCardsProps> = ({ pokemon }) => {
  
  const { setFavorites, favorites } = useContext(FavoriteContext);

  const addPokemonToFavorite = () => {
    setFavorites([...favorites, pokemon]);
  }

  const removePokemonFromFavorites = () => {
    setFavorites(favorites.filter((poke) => poke.name !== pokemon.name));
  }

  const isFavorite = favorites.some((poke) => poke.name === pokemon.name);

  return (
    <Card>
      <Link to={`/pokemon/${pokemon.name}`}>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="140"
        image={pokemon.sprites.front_default}
        title={pokemon.name}
      />
      </Link>

      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => type.type.name).join(', ')}
      />
      <CardActions disableSpacing>
        <IconButton onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite()} aria-label="add to favorites">
          <Favorite color={isFavorite ? `error` : `disabled`} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PokedexCards;
