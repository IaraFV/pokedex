import React, { useEffect, useState } from "react";
import {
  listPokemons,
  PokemonListInterface,
} from "../pokemon/services/listPokemons";
import { getPokemonsDetails } from "../pokemon/services/getPokemonsDetails";
import { PokemonsDetails } from "../pokemon/types/pokemonDetail";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";
import PokedexCards from "./components/PokedexCards";
import { useQuery } from "react-query";
interface pokedexProps {}

const Pokedex: React.FC<pokedexProps> = () => {
  const { data, isLoading } = useQuery(`listPokemons`, listPokemons);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
      {!isLoading ? (
          <>
          <Box mt={2}>
          <Grid container spacing={2}>
            {data?.results.map((pokemon) => (
              <>
                <Grid item xs={6} lg={3}>
                  <PokedexCards pokemon={pokemon}/>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
          </>
          ) : (<div><CircularProgress/></div>)}
        
      </Container>
    </div>
  );
};

export default Pokedex;
