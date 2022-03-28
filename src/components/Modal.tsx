import React, { useRef, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { ProductType } from "../models/ProductType";
import { useStoreActions } from "../store/hooks";

function Modal(props: any) {
  const [checked, setChecked] = useState<ProductType | undefined>(undefined);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const postProduct = useStoreActions(
    (actions) => actions.products.postProduct
  );
  const [selected, setSelected] = useState([]);
  const options =
    checked?.attributes.map((item) => {
      return {
        value: item.attribute_value._id,
        label: item.attribute_value.name,
      };
    }) || [];

  const saveButton = () => {
    postProduct({
      name: inputNameRef.current.value,
      created_at: new Date(),
      product_type: checked,
      assigned_attributes: selected.map((item: any) => {
        return { attribute_value: { _id: item.value } };
      }),
    });
    props.setShowModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Product</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 " htmlFor="name">
                      Name
                    </label>
                    <input
                      ref={inputNameRef}
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 " htmlFor="emailAddress">
                      Created At
                    </label>
                    <input
                      id="emailAddress"
                      value={new Date().toISOString().slice(0, 19)}
                      type="email"
                      disabled
                      className="block w-full px-4 py-2 mt-2 disabled:bg-gray-200 disabled:text-gray-500 text-gray-700  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 ">Product Type</label>
                    <div className="relative">
                      <div className="w-full  py-2 mt-2 disabled:bg-gray-200 disabled:text-gray-500 text-gray-700  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring flex  items-center">
                        <input
                          value={checked?.name}
                          onClick={() => setShowDropdown(!showDropdown)}
                          onChange={() => {}}
                          name="select"
                          id="select"
                          className="px-4 appearance-none outline-none text-gray-800 w-full"
                          checked
                        />

                        <label
                          htmlFor="show_more"
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </label>
                      </div>

                      {showDropdown ? (
                        <>
                          <input
                            type="checkbox"
                            onChange={() => {}}
                            name="show_more"
                            id="show_more"
                            className="hidden peer"
                            checked
                          />
                          <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
                            {props.productTypes.map((type: any) => {
                              return (
                                <div
                                  onClick={() => {
                                    setChecked(type);
                                    setSelected([]);
                                    setShowDropdown(false);
                                  }}
                                  key={type._id}
                                  className="cursor-pointer  border-t"
                                >
                                  <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                                    {type.name}
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-700 ">
                      Assigned Attributes
                    </label>

                    <MultiSelect
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      className="  mt-2 text-gray-700 bg-white border  rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      labelledBy={"_id"}
                    />
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => props.setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={saveButton}
              >
                Save And Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
