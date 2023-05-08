import React, { useContext } from "react";
import { FavoriteContext } from "./contexts/FavoriteContext";
import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import PokedexCards from "../pokedex/components/PokedexCards";

interface FavoriteScreenProps {}

const FavoriteScreen: React.FC<FavoriteScreenProps> = () => {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">FavoriteScreen</Typography>
        </Toolbar>
      </AppBar>
     
      <Container>
        <div style={{ marginTop: `1em` }}>
          <Grid container spacing={2}>
            {favorites.length === 0 ? (
              <Typography variant="h6">
                Você não tem nenhum favorito selecionado.
              </Typography>
            ) : (
              favorites.map((pokemon) => (
                <Grid item xs={6} lg={3}>
                  <PokedexCards pokemon={pokemon} />
                </Grid>
              ))
            )}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default FavoriteScreen;
