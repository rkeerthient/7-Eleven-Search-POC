import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types/products";
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
      const resultData: Product = responseJson.response;
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
            <Link to="/" className="border p-2 bg-blue-300	mb-8">
              Back
            </Link>
            <div className="flex mt-4">
              <div className="border mr-8">
                <img src={data.c_thumbnail.url} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="mt-4">{data.c_longDescription}</p>
                {data.c_categories && (
                  <div className="mt-4">
                    <span className="font-bold">Categories: </span>
                    <ul className="ml-4">
                      {data.c_categories.map((item: any, index: number) => (
                        <li className="list-disc ml-4" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {data.c_sizes && (
                  <div className="mt-4">
                    <span className="font-bold">Sizes: </span>
                    <ul className="ml-4">
                      {data.c_sizes.map((item: any, index: number) => (
                        <li className="list-disc ml-4" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {data.c_subcategories && (
                  <div className="mt-4">
                    <span className="font-bold">Subcategories: </span>
                    <ul className="ml-4">
                      {data.c_subcategories.map((item: any, index: number) => (
                        <li className="list-disc ml-4" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
