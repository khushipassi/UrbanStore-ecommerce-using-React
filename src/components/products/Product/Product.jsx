import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textsecondary">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions disablespacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
          {/* onClick={() => addItem(product.product)} /> */}
          {/* <button className="btn btn-success" onClick={() => addItem(product)}> */}
          {/* Add to cart */}
          {/* </button> */}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
