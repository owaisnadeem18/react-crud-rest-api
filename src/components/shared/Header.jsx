import { Edit, NotebookPen, PlusCircle } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center px-4 ">
      <div className="bg-white shadow-xl rounded-2xl p-6 my-10 w-full max-w-3xl flex flex-col md:flex-row gap-4 items-center">
        
        {/* Heading Input with Icon (Flex) */}
        <div className="flex items-center w-full flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-gray-600">
          <Edit className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Add Heading"
            className="w-full focus:outline-none"
          />
        </div>

        {/* Description Input with Icon (Flex) */}
        <div className="flex items-center w-full flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-gray-600">
          <NotebookPen className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Add Description"
            className="w-full focus:outline-none"
          />
        </div>

        {/* Add Button */}
        <button className="hover:bg-gray-800 flex gap-2 items-center text-white bg-gray-700 font-semibold px-6 py-2 rounded-lg cursor-pointer shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          <PlusCircle size={20} /> Add
        </button>
      </div>
    </div>
  );
};

export default Header;
