import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
import Items from "../../theme/items";
import Navbar from "../Navbar/Navbar";
import "./styles";

const Products = (props) => {
  const classes = useStyles();

  console.log(props);

  const data = Items.findIndex((item) => {
    return item.id === props.match.params.product_id;
  });

  console.log(Items[data].pro);

  const search = Items[data].pro;

  const name = Items[data].title;

  return (
    <>
      <Navbar />
      <main className={classes.content}>
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>{name}</h2>
        <div className={classes.toolbar} />

        <Grid container justify="center" spacing={4}>
          {search.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Products;
