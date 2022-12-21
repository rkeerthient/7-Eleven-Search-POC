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
        `https://liveapi.yext.com/v2/accounts/me/entities/${id}?api_key=fb9088a9a12a0affa2cff0022b814131&v=20220101`
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
          <div className="max-w-7xl mx-auto p-8">
            <div className="flex">
              <div className="border mr-8">
                <img src={data.c_thumbnail.url} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{data.name}</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
