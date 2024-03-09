import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        console.log(data.data);
        setRefresh(!refresh);
      });
  }, [refresh, id]);

  return (
    <div className="w-full">
      <div className="p-5 w-full">
        <div className="mb-3 text-center">
          <h1 className="text-pink-800 font-semibold text-3xl">
            Want to Edit The Poduct Name: {product.name} ?
          </h1>
          <h3 className="text-2xl">
            Fill the form and hit the Update Product button to Update Product
            Info
          </h3>
        </div>
        <form>
          <div className="pb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  What is your Product New Name?
                </span>
              </div>
              <input
                defaultValue={product.name}
                type="text"
                name="name"
                placeholder="Type your Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="pb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  What is your Product New Price?
                </span>
              </div>
              <input
                defaultValue={product.price}
                type="number"
                name="price"
                placeholder="Type your Product price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Pick the new category for your product
                </span>
              </div>
              <select className="select select-bordered" name="category" defaultValue={product.category}>
                <option disabled>
                  Pick one
                </option>
                <option>Wall Hanger</option>
                <option>Wall Mate</option>
                <option>New</option>
              </select>
            </label>
          </div>
          <div className="mb-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Pick the new Color of your product
                </span>
              </div>
              <select className="select select-bordered" name="color" defaultValue={product.color}>
                <option disabled>
                  Pick one
                </option>
                <option>White</option>
                <option>Black</option>
                <option>Golden</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text">
                  New Description for your product
                </span>
              </div>
              <textarea
                defaultValue={product.details}
                className="textarea textarea-bordered h-24"
                placeholder="About your product"
                name="details"
              ></textarea>
            </label>
          </div>

          <div className="pb-3 flex gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Product new Image URL</span>
              </div>
              <input
                defaultValue={product.img}
                type="text"
                name="img"
                placeholder="Input your product image url"
                className="input input-bordered w-full"
              />
            </label>
            <img src={product.img} className="rounded-xl" alt="" />
          </div>
          <div className="mt-9">
            <button className="btn btn-outline btn-success w-full">
              Update Product
            </button>
          </div>

          {/* TODO::: Upload Image to a hosting and get the img url */}
          {/* <div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Pick your product photo</span>
              </div>
              <input type="file" className="file-input file-input-bordered" />
            </label>
          </div>
          <div className="mt-9">
            <button className="btn btn-outline btn-success w-full">
              Add the Product
            </button>
          </div>
        </div> */}
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
