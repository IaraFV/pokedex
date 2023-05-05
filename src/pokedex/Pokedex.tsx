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
  Container,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import PokedexCards from "./components/PokedexCards";
interface pokedexProps {}

const Pokedex: React.FC<pokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonsDetails[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

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
                  {/* <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography>{pokemon.name}</Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/pokemon/${pokemon.name}`}>
                        <Button
                          onClick={() => setSelectedPokemon(pokemon)}
                          size="small"
                        >
                          Abrir
                        </Button>
                      </Link>
                    </CardActions>
                  </Card> */}
                  <PokedexCards pokemon={pokemon}/>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;
