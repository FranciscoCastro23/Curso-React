import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './mediacard.css';  // Importa el archivo CSS


const Tarjeta = (props:any) => {
  return (
    <Card className="media-card">
      <CardMedia
        className="media-card-media"
        image={props.pictureUrl}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="media-card-title">
          {props.title} {/* Cambiado de props.titulo a props.title */}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="media-card-description">
          {props.location}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="media-card-description">
          {props.bedrooms}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="media-card-description">
          {props.salePrice}
        </Typography>
      </CardContent>
      <CardActions className="media-card-actions">
        <Button size="small">{props.boton1}</Button>
      </CardActions>
    </Card>
  );
};

  
  Tarjeta.propTypes = {
    pictureUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
    boton1: PropTypes.string.isRequired,
  };
  
  export default Tarjeta;