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
          <div className="max-w-7xl mx-auto">
            <div>
              <ul className="flex w-100 navB my-8">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/products"> All Products</Link>
                </li>
                {data.c_cCategory && <li>{data.c_cCategory}</li>}
              </ul>
            </div>
            <div className="flex justify-between">
              <div style={{ width: "40%" }}>
                <div className="text-sm mb-2 block text-grey-5 font-normal">
                  Part#: {data.meta.id}
                </div>
                <h1 className="inline text-4xl	">
                  {data.brand} {data.name}
                  <div className="text-lg font-bold mt-2">
                    from {data.brand}
                  </div>
                </h1>
                {data.c_cRating && (
                  <div className="flex align-center">
                    <div className="">
                      <StarRatings
                        rating={parseFloat(data.c_cRating)}
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor="#0277bc"
                      />
                    </div>
                    <div className="ml-4">{data.c_cRating}</div>
                  </div>
                )}

                <div>
                  <p className="mt-4 mb-2 h-6 text-skeleton">Capacity</p>
                  <ul className="flex list-reset variant-axis-default flex-wrap variant-category-container mb-4">
                    {data.c_cCapacity?.map((item, index) => (
                      <div className="p-4 block cursor-default	 hover:bg-grey-1  active:bg-grey-light  hover:text-white font-bold text-sm   text-lg mr-4 mb-4 min-w-21  min-w-25 text-center leading-tight min-h-14 min-w-16 bg-black text-white active">
                        {item}
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="product-price mt-2 actives">
                  <div>
                    <div className="mb-3 text-left flex">
                      {data.c_cOldPrice && (
                        <p className="inline text-2xl font-medium mb-0 text-grey mr-3">
                          <span className="line-through">
                            ${data.c_cOldPrice}
                          </span>
                        </p>
                      )}
                      <p className="text-2xl font-bold">
                        <span aria-hidden="true">
                          ${data.price.value || 108}
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-warp mt-3 sm:mt-0">
                        <div>
                          <div className="border border-grey-light flex productQty mr-4">
                            <button className="px-2 py-4 text-sm sm:text-base">
                              <AiOutlineMinus />
                            </button>
                            <input
                              id="productQuantity"
                              type="number"
                              min="1"
                              className="px-0 py-4 text-center w-12"
                              defaultValue={1}
                            />
                            <button
                              aria-label="Increase the quantity"
                              className="px-2 py-4 text-sm sm:text-base"
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                        <button className="addToCartBtn defaultEnter leading-none capitalize py-4 w-full text-base sm:text-lg text-white bg-blue hover:bg-blue-300 active:bg-blue-400 border border-blue hover:border-dark-blue active:border-darker-blue bg-blue-600 ">
                          Add To Cart
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap text-grey-3">
                      <p className="mb-2">30-Day Money-Back Guarantee</p>
                      <span className="mx-2">|</span>
                      <div className="inheritPara mb-4">
                        5-Year Limited Warranty
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "55%" }}>
                <div>
                  <div className="flex">
                    <div className="splide vertical-carousel-single sm:pr-3 hideDots -mx-4 sm:mx-0 splide--fade splide--ltr splide--draggable is-active is-initialized bg-gray-100">
                      <div className="flex items-center w-full h-full">
                        <img
                          src={
                            data.c_customPhoto || data.photoGallery[0].image.url
                          }
                          style={{ width: "450px", height: "450px" }}
                          alt=""
                        />
                      </div>
                    </div>
                    {data.photoGallery && (
                      <div style={{ width: "14%" }}>
                        {data.photoGallery?.map((item) => (
                          <div className="my-4 ml-4 border">
                            <img src={item.image.url} alt="" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="mt-10">
              <img
                src="https://i.imgur.com/cqRgkID.png"
                alt=""
                className="mb-8"
              />
              <hr className="my-4" />
              {data.c_proddetails && (
                <>
                  <h2 className="text-xl font-bold mb-8 block">
                    Full Specifications
                  </h2>
                  <div className="bg-even-odd mb-6">
                    {data.c_proddetails?.map((item, index) => (
                      <div
                        className="target-even-odd border-b border-grey-light flex items-center pl-7 pb-3 pt-4 overflow-hidden"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </div>
                </>
              )}
              {data.c_otherProducts && (
                <>
                  <h2 className="text-xl font-bold mb-8 block">
                    Product Numbers
                  </h2>
                  <div className="bg-even-odd mb-6">
                    {data.c_otherProducts.map((item, index) => (
                      <div
                        className="target-even-odd border-b border-grey-light flex items-center pl-7 pb-3 pt-4 overflow-hidden"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
