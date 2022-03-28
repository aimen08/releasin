import React, { useEffect } from "react";
import AddButton from "../components/AddButton";
import FilterButton from "../components/FilterButton";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Space from "../components/Space";
import { useStoreActions, useStoreState } from "../store/hooks";

function MainRoute() {
  const requestProducts = useStoreActions(
    (actions) => actions.products.request
  );

  const products = useStoreState((state) => state.products.items);

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <div className="sm:px-6 w-full">
      {/* Header */}

      <Header />

      {/* Body */}

      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-between">
          {/* Filter Button For now just show All */}
          <div className="flex items-center">
            <FilterButton />
          </div>
          {/* Add Product Open Modal */}
          <AddButton />
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              {products.map((item) => {
                return <ListItem key={item._id} item={item} />;
              })}
              <Space />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainRoute;
