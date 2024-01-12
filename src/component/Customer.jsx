import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import ReactModal from "react-modal";

const Customer = () => {
  const [addCustomerModalOpen, setAddCustomerModalOpen] = useState(false);
  const [editCustomerModalOpen, setEditCustomerModalOpen] = useState(false);
  const [deletecustomer, setDeleteCustomerModal] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      innerWidth: "100px",
      height: "430px",
      width: "400px",
      borderRadius: "10px"
    }
  };

  const openAddCustomerModal = () => {
    setAddCustomerModalOpen(true);
  };

  const closeAddCustomerModal = () => {
    setAddCustomerModalOpen(false);
  };

  const openEditCustomerModal = () => {
    setEditCustomerModalOpen(true);
  };

  const closeEditCustomerModal = () => {
    setEditCustomerModalOpen(false);
  };

  const editHandler = id => {
    // Set any specific logic or data related to editing
    console.log("Edit btn clicked for customer ID:", id);
    openEditCustomerModal();
  };

  const addCustomer = () => {
    openAddCustomerModal();
  };

  const deleteCustomerModalOpen = () => {
    setDeleteCustomerModal(true);
  };

  const deleteCustomerModalClose = () => {
    setDeleteCustomerModal(false);
  };

  const handleDelete = () => {
    deleteCustomerModalOpen();
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 bg-[#FFFFFF]">
        <h1 className="text-2xl font-bold">CUSTOMERS</h1>
      </div>
      <div className="bg-[#F3F3F3]">
        <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <button
            onClick={() => {
              addCustomer();
            }}
            className="uppercase bg-gradient-to-r from-[#57BC90] to-[#004B40] text-white py-2 px-4 rounded-md"
          >
            + Add New Customer
          </button>
        </div>
        <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-full ">
          <thead className="bg-[#57BC90] py-2 flex justify-evenly text-[#015249] font-bold">
            <tr className="">
              <td className="">Customer Id</td>
              <td>Customer Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody className="">
            <div className="my-8">
              <tr className="flex justify-between items-center gap-24 bg-white px-2 py-2 rounded-md">
                <td>
                  <img
                    src="/profile1.png"
                    className="h-[109px] w-[105px]"
                    alt="Profile"
                  />
                </td>
                <td>
                  <span>001</span>
                </td>
                <td className="text-[#57BC90] underline">Jordan Joseph</td>
                <td>randomemail@gmail.com</td>
                <td>
                  <button
                    className="bg-[#b0e1b7] px-6 py-1 me-6"
                    onClick={() => {
                      editHandler(1);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#ef9999] px-6 py-1"
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </div>
          </tbody>
          {/* ADD NEW CUSTOMER MODAL */}
          <ReactModal
            style={customStyles}
            isOpen={addCustomerModalOpen}
            onRequestClose={closeAddCustomerModal}
            className=""
            ariaHideApp={false}
          >
            <div className="flex justify-between bg-gradient-to-r from-[#57BC90] to-[#004B40] py-4">
              <p className="ms-4 my-4 text-xl text-white font-bold">
                Add New Customer
              </p>
              <button onClick={close} className="absolute right-2 top-2">
                X
              </button>
            </div>
            <div className="my-6">
              <div className="">
                <input
                  className="w-full py-2 px-2 border border-gray-400 rounded-md"
                  type="text"
                  name="customername"
                  placeholder="Customer Name"
                />
              </div>
              <div className="my-6">
                <input
                  className="w-full py-2 px-2 border border-gray-400 rounded-md"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="my-6">
                <input
                  className="w-full rounded-md"
                  type="file"
                  name="photo"
                  placeholder="Upload Photo"
                />
              </div>
              <div className="my-5 w-full">
                <button className=" w-full uppercase bg-gradient-to-r from-[#57BC90] to-[#004B40] text-white py-2 px-4 rounded-md">
                  Add Customer
                </button>
              </div>
            </div>
          </ReactModal>
          {/* EDIT CUSTOMER MODAL */}
          <ReactModal
            style={customStyles}
            isOpen={editCustomerModalOpen}
            onRequestClose={closeEditCustomerModal}
            className=""
            ariaHideApp={false}
          >
            <div className="flex justify-between bg-gradient-to-r from-[#57BC90] to-[#004B40] py-4">
              <p className="ms-4 my-4 text-xl text-white font-bold">
                Edit Customer
              </p>
              <button onClick={close} className="absolute right-2 top-2">
                X
              </button>
            </div>
            <div className="my-6">
              <div className="">
                <input
                  className="w-full py-2 px-2 border border-gray-400 rounded-md"
                  type="text"
                  name="customername"
                  placeholder="Customer Name"
                />
              </div>
              <div className="my-6">
                <input
                  className="w-full py-2 px-2 border border-gray-400 rounded-md"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="my-6">
                <input
                  className="w-full rounded-md"
                  type="file"
                  name="photo"
                  placeholder="Upload Photo"
                />
              </div>
              <div className="my-5 w-full">
                <button className=" w-full uppercase bg-gradient-to-r from-[#57BC90] to-[#004B40] text-white py-2 px-4 rounded-md">
                  Edit Customer
                </button>
              </div>
            </div>
          </ReactModal>
          <ReactModal
            style={customStyles}
            isOpen={deletecustomer}
            onRequestClose={deleteCustomerModalClose}
            className=""
            ariaHideApp={false}
          >
            <button onClick={close} className="absolute right-2 top-2">
              X
            </button>
            <div className="text-center">
              <MdDeleteForever className="text-9xl inline-block text-red-500 text-center" />
              <p className="text-center my-3 font-bold text-xl">Are You Sure</p>
              <p>
                Do you really want to delete this customer? This process can not
                be undone.
              </p>
              <div className="flex justify-around mt-10">
                <button className="bg-[#A5A5AF] py-2 px-8 rounded-md text-white">
                  Cancel
                </button>
                <button className="bg-[#D80000] py-2 px-8 rounded-md text-white">
                  Delete
                </button>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    </div>
  );
};

export default Customer;
