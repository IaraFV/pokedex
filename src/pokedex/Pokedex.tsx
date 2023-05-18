import React, { useContext, useEffect, useState } from "react";
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
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  LinearProgress,
} from "@mui/material";
import PokedexCards from "./components/PokedexCards";
import { useQuery } from "react-query";
import { FavoriteOutlined, Search } from "@mui/icons-material";
import { FavoriteContext } from "../favorites/contexts/FavoriteContext";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import imgLogo from './assets/Title.png';
interface pokedexProps {}

const Pokedex: React.FC<pokedexProps> = () => {
  const { favorites } = useContext(FavoriteContext);
  const { data, isLoading, isRefetching, refetch } = useQuery(
    `listPokemons`,
    listPokemons
  );

  const linkFavorites = () => {
    window.location.href = "/favoritos";
  };

  const favoritesCount = favorites.length;
  
  return (
    <>
      <div>
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100' }}>
            <img src={imgLogo} alt="50" />
            <Box>
              <IconButton
                size="large"
                aria-haspopup="true"
                color="inherit"
                onClick={linkFavorites}
              >
                <Badge badgeContent={favoritesCount} color="primary">
                  <FavoriteOutlined />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {isRefetching && <LinearProgress color="secondary" />}
        <Container maxWidth="lg">
          {!isLoading ? (
            <>
              <Box mt={2}>
                <Button onClick={() => refetch()}>refetch</Button>
                <Grid container spacing={2}>
                  {data?.results.map((pokemon) => (
                    <>
                      <Grid item xs={6} lg={3}>
                        <PokedexCards pokemon={pokemon} />
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Box>
            </>
          ) : (
            <div>
              <CircularProgress />
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Pokedex;
