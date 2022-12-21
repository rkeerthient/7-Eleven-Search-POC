import { Product } from "../../types/products";
import { CardProps } from "@yext/search-ui-react";
import { fireClickEvent } from "../../utils/search_analytics";
import { Link } from "react-router-dom";
import { useProdContext } from "../../context/prodContext";

export const ProductCard = ({ result }: CardProps<Product>): JSX.Element => {
  const product = result.rawData;
  const fireEventAndNavigate = () => {
    fireClickEvent("coffee", product.id);
    window.location.href = `/productdetail/${product.id}`;
  };
  return (
    <a
      className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 gap-4 h-90"
      onClick={() => fireEventAndNavigate}
    >
      <div className="flex align-center justify-between">
        <img className="h-48 w-48" src={product.c_thumbnail?.url} alt="" />
      </div>
      <div className="flex-col justify-between">
        <p className="font-semibold text-gray-900">{product.name}</p>
        <p className="text-gray-500">
          {product.c_sizes === undefined || product.c_sizes?.length == 0
            ? ""
            : "Size: "}{" "}
          {product.c_sizes?.[0]}
        </p>
      </div>
    </a>
  );
};
