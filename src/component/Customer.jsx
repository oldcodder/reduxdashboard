import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import ReactModal from "react-modal";

const Customer = () => {
  const [addCustomerModalOpen, setAddCustomerModalOpen] = useState(false);
  const [editCustomerModalOpen, setEditCustomerModalOpen] = useState(false);
  const [deletecustomer, setDeleteCustomerModal] = useState(false);
  const [customerData, setcustomerData] = useState();


  const customerApi = async()=>{
    const response = await fetch('https://reqres.in/api/users?page=1');
    let result = await response.json();
    setcustomerData(result.data);
    console.log(result.data);
  }

  useEffect(()=>{
    customerApi();
  },[])

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
      <div className="bg-[#F3F3F3] p-4">
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
        <table className="text-center w-full border-separate border-spacing-y-4 ">
          {/* <thead className="bg-[#57BC90] py-2 flex justify-evenly text-[#015249] font-bold">
            <tr className="">
              <td className="">Customer Id</td>
              <td>Customer Name</td>
              <td>Email</td>
            </tr>
          </thead> */}
          <tbody>

          <tr className="p-3">
            <th className="bg-[#57BC90] rounded-tl-md rounded-bl-md text-left p-3"></th>
            <th className="bg-[#57BC90] p-3">Customer Id</th>
            <th className="bg-[#57BC90] p-3">Customer Name</th>
            <th className="bg-[#57BC90] p-3">Email</th>
            <th className="bg-[#57BC90] rounded-tr-md rounded-br-md p-3"></th>
          </tr>
           
              {customerData && 
              customerData.map((data)=>( 
              <tr className="px-2 py-2 rounded-md " key={data.id}>
                <td className="bg-white rounded-tl-md rounded-bl-md">
                  <img
                    src={data.avatar}
                    className="h-[109px] w-[105px]"
                    alt="Profile"
                  />
                </td>
                <td className="bg-white">
                  <span>{data.id}</span>
                </td>
                <td className="text-[#57BC90] underline bg-white">{data.first_name}</td>
                <td className="bg-white">{data.email}</td>
                <td className="rounded-tr-md rounded-br-md bg-white">
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
              ))}
           
          </tbody>
          </table>
         
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
  );
};

export default Customer;
