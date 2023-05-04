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
import { Box, Button, Card, CardActions, CardContent, Container, Grid } from "@mui/material";
interface pokedexProps {}

const Pokedex: React.FC<pokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    PokemonsDetails | undefined
  >(undefined);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;
    getPokemonsDetails(selectedPokemon.name).then((response) =>
      setSelectedPokemonDetails(response)
    );
  }, [selectedPokemon]);

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
        <Box mt={2}>
          <Grid container spacing={2}>
            {pokemons.map((pokemon) => (
              <>
                <Grid item xs={6} lg={3}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography>{pokemon.name}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => setSelectedPokemon(pokemon)} size="small">Abrir</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
          <h2>
            Pokemon selecionado:{" "}
            {selectedPokemon?.name || "Nenhum Pokemon foi selecionado"}
          </h2>
          {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;
