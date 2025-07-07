'use client';
import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../NavBarAdmin";
import axios from "axios";

export default () => {
  type CategoryForm = {
  category: string;
  rating: number;
  status: "active" | "inactive";
};

const [formData, setFormData] = useState<CategoryForm>({
  category: "",
  rating: 0,
  status: "active",
});

  const handleChange = (e:any) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };

  const handleStatusChange = (e:any) => {
    setFormData({ ...formData, status: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/category/category", formData);
    console.log("Success:", res.data);
    alert("Category created successfully!");
    setFormData({ category: "", rating: 0, status: "active" });
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("Axios Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to create category.");
    } else {
      console.error("Unexpected Error:", err);
      alert("An unexpected error occurred.");
    }
  }
};


  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Navbar />
        <Sidebar />
        <div className="h-full ml-14  mb-10 mt-16 md:ml-64">
          <div className="mb-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-gray-600">Categories</h4>
              <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                <li className="flex items-center mr-2 text-gray-500">
                  <span>Admin Dashboard</span>
                </li>
                <li className="flex items-center mr-4 mt-4 md:mt-0">
                  <div className="mr-2">
                    <svg className="w-2 h-2" fill="#000000" viewBox="0 0 571.815 571.815" transform="rotate(180)">
                      <path d="M76.208,296.042l415.78,272.132c8.286,6.646,12.062,3.941,8.431-6.04L329.355,302.084 c-3.629-9.981-3.596-26.156,0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11L76.284,272.07 C67.958,278.661,67.921,289.395,76.208,296.042z" />
                    </svg>
                  </div>
                  <span> Categories</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-start px-8">
            <div className="mx-auto w-full bg-white">
              <form onSubmit={handleSubmit}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 ">
                    <div className="mb-5">
                      <label className="mb-3 block text-sm font-medium text-[#07074D]">
                        Category Name
                      </label>
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Category Name"
                        required
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-[#07074D]">
                    Rate your Category in case if it need to be censored (Optional)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-[#07074D]">
                    Please make sure to active the status. Inactive categories and subcategories are not shown to the writer
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="active"
                        checked={formData.status === "active"}
                        onChange={handleStatusChange}
                        className="h-5 w-5"
                      />
                      <label className="pl-3 text-base font-medium text-[#07074D]">Active</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="inactive"
                        checked={formData.status === "inactive"}
                        onChange={handleStatusChange}
                        className="h-5 w-5"
                      />
                      <label className="pl-3 text-base font-medium text-[#07074D]">Inactive</label>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
