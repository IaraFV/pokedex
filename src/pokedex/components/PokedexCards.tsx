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
import "./style/PokedexCard.css";
import { Types } from "./style/typesColors/Colors";

interface PokedexCardsProps {
  pokemon: PokemonsDetails;
}

export const PokedexCards: React.FC<PokedexCardsProps> = ({ pokemon }) => {
  const { setFavorites, favorites } = useContext(FavoriteContext);

  const addPokemonToFavorite = () => {
    setFavorites([...favorites, pokemon]);
  };

  const removePokemonFromFavorites = () => {
    setFavorites(favorites.filter((poke) => poke.name !== pokemon.name));
  };

  const isFavorite = favorites.some((poke) => poke.name === pokemon.name);

  const getTypeColor = (type: string): string => {
    return Types[type] || "#D67136";
  };

  return (
    <div className="bodyCard">
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="container">
          <CardMedia
            component="img"
            alt={pokemon.name}
            height="250"
            width="100%"
            image={pokemon.sprites.front_default}
            title={pokemon.name}
            className="moving-image"
          />
        </div>
      </Link>

      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => (
          <Chip
            sx={{
              color: getTypeColor(type.type.name),
              borderColor: getTypeColor(type.type.name),
            }}
            label={type.type.name}
            variant="outlined"
          />
        ))}
      />

      <CardActions disableSpacing>
        <IconButton
          onClick={() =>
            isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite()
          }
          aria-label="add to favorites"
        >
          <Favorite color={isFavorite ? `error` : `disabled`} />
        </IconButton>
      </CardActions>
    </div>
  );
};

export default PokedexCards;
