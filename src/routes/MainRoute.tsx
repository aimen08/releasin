import React from "react";
import AddButton from "../components/AddButton";
import FilterButton from "../components/FilterButton";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Space from "../components/Space";

function MainRoute() {
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
              <ListItem />
              <Space />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainRoute;
