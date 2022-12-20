import { Product } from "../../types/products";
import { CardProps } from "@yext/search-ui-react";
import { fireClickEvent } from "../../utils/search_analytics";
import { provideSearchAnalytics } from "@yext/analytics";
export const ProductCard = ({ result }: CardProps<Product>): JSX.Element => {
  const product = result.rawData;
  const searchAnalytics = provideSearchAnalytics({
    experienceKey: "7-eleven-search-poc",
    experienceVersion: "PRODUCTION",
    businessId: 3878450, // this comes from the url of your Yext account
  });
  const fireEvent = () => {
    searchAnalytics.report({
      type: "CTA_CLICK",
      entityId: "1",
      verticalKey: "people",
      searcher: "VERTICAL",
      queryId: "12345678-1234-1234-1234-123456789012",
    });
  };
  return (
    <div
      className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 gap-4 h-90"
      onClick={() => fireEvent}
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
    </div>
  );
};
