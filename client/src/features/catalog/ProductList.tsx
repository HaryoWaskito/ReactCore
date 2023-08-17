import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "../../app/models/Product";

interface Props {
  products: Product[];
}

export default function ProducList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard  product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
