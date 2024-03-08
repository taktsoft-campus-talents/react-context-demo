import { useParams } from "react-router-dom";

export function ProductDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <p>This is the product detail page for id: {id}</p>
    </>
  );
}
