import React from "react";

function AddButton() {
  return (
    <button
      onClick={() => null}
      className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
    >
      <p className="text-sm font-medium leading-none text-white">Add Product</p>
    </button>
  );
}

export default AddButton;
