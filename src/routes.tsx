import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pokedex/Pokedex";
import PokemonDetails from "./pokemon/PokemonDetails";

interface RoutesProps {}

export const Rout: React.FC<RoutesProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonDetails/>} />
        <Route path="/" element={<Pokedex/>} />
      </Routes>
    </>
  );
};

export default Rout;
