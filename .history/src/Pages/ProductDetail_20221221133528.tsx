import { useParams } from "react-router-dom";

const ProductDetail = ({ prodDetails }: any) => {
  const { id } = useParams<any>();
  console.log(id);

  return <h1>Hi</h1>;
};

export default ProductDetail;
