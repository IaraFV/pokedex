import React, { useEffect, useState } from "react";
import { PokemonsDetails } from "./types/pokemonDetail";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPokemonsDetails } from "./services/getPokemonsDetails";

interface PokemonDetailsProps {}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  let { name } = useParams();
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    PokemonsDetails | undefined
  >(undefined);

  useEffect(() => {
    if (!name) return;
    getPokemonsDetails(name).then((response) =>
      setSelectedPokemonDetails(response)
    );
  }, [name]);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={2}>
          <img width='70%' height='auto' src={selectedPokemonDetails?.sprites.front_default} alt=""></img>
        </Box>
        <Typography variant="h2">
          {selectedPokemonDetails?.name}
        </Typography>
        <Typography>
        </Typography>
        {selectedPokemonDetails?.types.map((type) =><Typography>
          {type.type.name}
        </Typography> )}
        <Typography>
          {selectedPokemonDetails?.height}
        </Typography>
        <Typography>
          {selectedPokemonDetails?.species.name}
        </Typography>
        <Typography>
          {selectedPokemonDetails?.weight}
        </Typography>
        {selectedPokemonDetails?.abilities.map((ability) =><Typography>
          {ability.ability.name}
        </Typography> )}
      </Container>
    </>
  );
};

export default PokemonDetails;
