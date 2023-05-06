import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPokemonsDetails } from "./services/getPokemonsDetails";

interface PokemonDetailsProps {}


export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  
  const { data } =  useQuery(`getPokemonsDetails-${name}`, () => getPokemonsDetails(name));
  const selectedPokemonDetails = data;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={goBack}>voltar</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {selectedPokemonDetails?.name}
          </Typography>
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
