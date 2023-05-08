import React, { useContext } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPokemonsDetails } from "./services/getPokemonsDetails";
import { Favorite } from "@mui/icons-material";
import { FavoriteContext } from "../favorites/contexts/FavoriteContext";

interface PokemonDetailsProps {}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { setFavorites, favorites } = useContext(FavoriteContext);

  
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { data } = useQuery(`getPokemonsDetails-${name}`, () =>
    getPokemonsDetails(name)
  );
  const selectedPokemonDetails = data;

  const addPokemonToFavorite = () => {
    if (!selectedPokemonDetails) return;
    setFavorites([...favorites, selectedPokemonDetails]);
  }

  const removePokemonFromFavorites = () => {
    if (!selectedPokemonDetails) return;
    setFavorites(favorites.filter((poke) => poke.name !== selectedPokemonDetails.name));
  }

  const isFavorite = favorites.some((poke) => poke.name === selectedPokemonDetails?.name);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={goBack}>voltar</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {selectedPokemonDetails?.name}
          </Typography>
          <Box>
          <IconButton onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite()} aria-label="add to favorites">
          <Favorite color={isFavorite ? `error` : `disabled`} />
        </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box mt={2}>
          <img
            width="70%"
            height="auto"
            src={selectedPokemonDetails?.sprites.front_default}
            alt=""
          ></img>
        </Box>
        <Typography variant="h2">{selectedPokemonDetails?.name}</Typography>
        <Typography></Typography>
        {selectedPokemonDetails?.types.map((type) => (
          <Typography>{type.type.name}</Typography>
        ))}
        <Typography>{selectedPokemonDetails?.height}</Typography>
        <Typography>{selectedPokemonDetails?.species.name}</Typography>
        <Typography>{selectedPokemonDetails?.weight}</Typography>
        {selectedPokemonDetails?.abilities.map((ability) => (
          <Typography>{ability.ability.name}</Typography>
        ))}
      </Container>
    </>
  );
};

export default PokemonDetails;
