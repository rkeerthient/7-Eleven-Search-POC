import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export type ParamTypes = {
  id: string;
};
const ProductDetail = () => {
  const { id } = useParams<ParamTypes>();
  const [data, setData] = useState<any>();
  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/${id}?api_key=9bf9a3d052c2f225a8b8c38906d1e078&v=20220101`
      );

      const responseJson = await response.json();
      const resultData = responseJson.response;
      console.log(JSON.stringify(resultData));

      setData(await resultData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  return (
    <>
      {data && (
        <>
          <div className="max-w-7xl mx-auto"></div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
