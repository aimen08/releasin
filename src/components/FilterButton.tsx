import React from "react";

function FilterButton() {
  return (
    <a
      className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800"
      href=" javascript:void(0)"
    >
      <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
        <p>All</p>
      </div>
    </a>
  );
}

export default FilterButton;
