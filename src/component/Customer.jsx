import React from "react";

const Customer = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 bg-[#FFFFFF]">
        <h1 className="text-2xl font-bold">CUSTOMERS</h1>
      </div>
      <div className="bg-[#F3F3F3]">
        <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <button className="uppercase bg-gradient-to-r from-[#57BC90] to-[#004B40] text-white py-2 px-4 rounded-md">
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
              <tr className="flex justify-between items-center gap-24 bg-white px-2 py-2 rounded-md w-full">
                <td>
                  <img src="/profile1.png" className="h-[109px] w-[105px]" />
                </td>
                <td>
                  <span>001</span>
                </td>
                <td className="text-[#57BC90] underline">Jordan Joseph</td>
                <td>randomemail@gmail.com</td>
                <td>
                  <button className="bg-[#b0e1b7] px-6 py-1 me-6">Edit</button>
                  <button className="bg-[#ef9999] px-6 py-1">Delete</button>
                </td>
              </tr>
            </div>
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default Customer;
