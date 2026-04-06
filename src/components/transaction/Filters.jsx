import { Download, Plus, Search } from "lucide-react";

const Filters = ({ setToggleForm }) => {
  return (
    <>
      <div className="my-4 flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-md md:flex-row md:items-center md:justify-between md:p-5">
        {/* Search */}
        <div className="flex w-full items-center rounded-xl border border-gray-200 bg-white px-4 py-2">
          <Search size={16} className="mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Button */}
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2 font-medium shadow-sm transition-all duration-200 hover:bg-indigo-600 hover:text-white hover:shadow-md md:w-auto">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="my-4 flex flex-col flex-wrap justify-between gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-md md:flex-row md:p-5">
        <div className="flex gap-3">
          <select className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All</option>
          </select>

          <select className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Category</option>
          </select>

          <select className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Sort by recent</option>
          </select>
        </div>
        <div>
          <button
            className="flex w-full flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2 font-medium shadow-sm transition-all duration-200 hover:bg-indigo-600 hover:text-white hover:shadow-md md:w-auto"
            onClick={() => setToggleForm(true)}
          >
            <Plus size={16} />
            Transaction
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
