import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          if (data.success) {
            setRefresh(!refresh);
            Swal.fire("Successfully Deleted");
            console.log(data);
          } else {
            Swal.fire(data.error);
          }
        } catch (error) {
          Swal.fire(error.message);
        }
      });
    console.log(id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, [refresh]);

  const handleEdit = (id) => {
    navigate(`/dashboard/product/edit/${id}`);
  };

  return (
    <div>
      <div>
        <div className="text-center font-semibold text-3xl text-yellow-500 mb-6">
          Total Products :{" "}
          <span className="text-blue-900">{products.length}</span>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-bold">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                  Photo
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center font-bold">
                  Action
                </th>
              </tr>
            </thead>
            {products.map((product) => (
              <>
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.name}
                    </th>
                    <td className="px-6 py-4">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{product.color}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">BDT {product.price}</td>
                    <td className="px-6 py-4">
                      <div className="grid grid-cols-2 gap-1 align-middle items-center">
                        <button
                          onClick={() => handleEdit(product._id)}
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-1 text-center py-1 text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="focus:outline-none text-white font-semibold bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-1 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
