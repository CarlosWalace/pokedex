import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Box, Button, CardActionArea, CardActions } from '@mui/material';


export default function Cards({ name , image, types}) {
  const tiposPokemons = () => {
    if(types[1]) {
      return types[0].type.name + " / " + types[1].type.name;
    }
    return types[0].type.name;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img" height="200" image={image} />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {tiposPokemons()}
            </Typography>
          </Box>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
