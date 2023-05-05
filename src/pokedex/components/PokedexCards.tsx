import React from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PokemonsDetails } from "../../pokemon/types/pokemonDetail";
import { Chip } from "@mui/material";

interface PokedexCardsProps {
  pokemon: PokemonsDetails;
}

// const Card = styled.section`
//   padding: 4em;
//   background: red;
// `;

export const PokedexCards: React.FC<PokedexCardsProps> = ({ pokemon }) => {
  return (
    <>
      <Link to={`/pokemon/${pokemon.name}`}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            style={{ height: 0, paddingTop: "56%" }}
            image={pokemon.sprites.front_default}
          />
          <CardHeader
            title={pokemon.name}
            subheader={pokemon.types.map((type) => (
              <Chip label={type.type.name} variant="outlined" />
            ))}
          />
        </Card>
      </Link>
    </>
  );
};

export default PokedexCards;
