import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = []
    for(var i = 1; i < 600 ; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
      var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const filtroPokedex = (name) => {
     var filtroPokemons = []
     if(name===""){
        getPokemons()
     }
     for(var i in pokemons) {
        if(pokemons[i].data.name.includes(name)){
            filtroPokemons.push(pokemons[i])
      }
     }
     setPokemons(filtroPokemons);
   }

  return (
    <div>
      <Navbar filtroPokedex={filtroPokedex} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <Cards name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
