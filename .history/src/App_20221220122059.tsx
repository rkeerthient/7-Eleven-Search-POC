import {
  AppliedFilters,
  Pagination,
  ResultsCount,
  SearchBar,
  StandardFacets,
  VerticalResults,
  FocusedItemData,
  DropdownItem,
  RenderEntityPreviews,
} from "@yext/search-ui-react";
import {
  provideHeadless,
  VerticalResults as VerticalResultsData,
  Result,
  useSearchState,
} from "@yext/search-headless-react";
import { ProductCard } from "./components/cards/ProductCard";
import { Product } from "./types/products";
import classnames from "classnames";

const entityPreviewSearcher = provideHeadless({
  apiKey: "184b8f65a7921212f4a09118718f3db9",
  experienceKey: "7-eleven-search-poc",
  locale: "en",
  headlessId: "entity-preview-searcher",
  additionalQueryParams: { limit: '{"products": 4}' },
  sessionTrackingEnabled: true,
});

const App = (): JSX.Element => {
  const query = useSearchState((state) => state.query.input);

  const renderEntityPreviews: RenderEntityPreviews = (
    autocompleteLoading,
    verticalKeyToResults: Record<string, VerticalResultsData>,
    dropdownItemProps: {
      onClick: (
        value: string,
        _index: number,
        itemData?: FocusedItemData
      ) => void;
      ariaLabel: (value: string) => string;
    }
  ): JSX.Element | null => {
    if (!query) return null;

    const productResults = verticalKeyToResults["products"]
      ?.results as unknown as Result<Product>[];

    return productResults ? (
      <div
        // laying out the product previews in a grid
        className={classnames("grid grid-cols-4 px-8 gap-8", {
          // fading the results if they're loading
          "opacity-50": autocompleteLoading,
        })}
      >
        {productResults.map((result, i) => (
          // DropdownItem is impored from @yext/search-ui-react
          <DropdownItem
            key={result.rawData.id}
            value={result.rawData.name}
            // when an item is clicked, it will change the URL
            onClick={() =>
              history.pushState(null, "", `/product/${result.rawData.id}`)
            }
            ariaLabel={dropdownItemProps.ariaLabel}
          >
            <ProductCard result={result} />
          </DropdownItem>
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-7xl">
        <SearchBar
          visualAutocompleteConfig={{
            entityPreviewSearcher: entityPreviewSearcher,
            includedVerticals: ["products"],
            renderEntityPreviews: renderEntityPreviews,
            universalLimit: { products: 4 },
            entityPreviewsDebouncingTime: 500,
          }}
        />
        <div className="flex gap-16 pb-8">
          <StandardFacets
            customCssClasses={{ standardFacetsContainer: "min-w-[200px]" }}
          />
          <div className="flex-col">
            <ResultsCount customCssClasses={{ resultsCountContainer: "" }} />
            <AppliedFilters
              customCssClasses={{
                clearAllButton: "hidden",
                appliedFiltersContainer: "pb-4",
              }}
            />
            <VerticalResults
              CardComponent={ProductCard}
              customCssClasses={{
                verticalResultsContainer: "grid grid-cols-4 gap-4 pb-4",
              }}
            />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
