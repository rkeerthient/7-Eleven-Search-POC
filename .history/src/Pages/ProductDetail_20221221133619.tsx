import { useParams } from "react-router-dom";
export type ParamTypes = {
  id: string;
};
const ProductDetail = () => {
  const { id } = useParams<ParamTypes>();
  console.log(id);

  return <h1>Hi</h1>;
};

export default ProductDetail;
