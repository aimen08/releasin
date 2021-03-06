import React, { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import EditModal from "../components/EditModal";
import FilterButton from "../components/FilterButton";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
import Space from "../components/Space";
import { useStoreActions, useStoreState } from "../store/hooks";

function MainRoute() {
  /* local state */
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState();

  const requestProducts = useStoreActions(
    (actions) => actions.products.request
  );
  const requestProductTypes = useStoreActions(
    (actions) => actions.productTypes.request
  );

  const products = useStoreState((state) => state.products.items);
  const productTypes = useStoreState((state) => state.productTypes.types);

  useEffect(() => {
    requestProducts();
    requestProductTypes();
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
          <AddButton setShowModal={setShowModal} />
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="w-full  whitespace-nowrap">
            <tbody>
              {!products ? (
                <div className="flex justify-center items-center">
                  <div
                    className="spinner-border animate-spin inline-block mt-20 w-8 h-8 border-4 rounded-full text-[#4F46E5]"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                products.map((item) => {
                  return (
                    <ListItem
                      key={item._id}
                      item={item}
                      setShowEditModal={setShowEditModal}
                      setSelectedEdit={setSelectedEdit}
                    />
                  );
                })
              )}
              <Space />
            </tbody>
          </table>
        </div>
      </div>

      {showModal ? (
        <Modal setShowModal={setShowModal} productTypes={productTypes} />
      ) : null}
      {showEditModal ? (
        <EditModal
          setShowModal={setShowEditModal}
          productTypes={productTypes}
          item={selectedEdit}
        />
      ) : null}
    </div>
  );
}

export default MainRoute;
