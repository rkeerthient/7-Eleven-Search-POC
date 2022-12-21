const ProductDetail = ({ prodDetails }: any) => {
  console.log(JSON.stringify(prodDetails));

  return <>Hi</>;
};

export default ProductDetail;

function useParams<T>(): { id: any } {
  throw new Error("Function not implemented.");
}
