import Swal from 'sweetalert2'

const AddItems = () => {
   const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const color = form.color.value;
    const details = form.details.value;
    const img = form.img.value;
    const product = {
      name,
      price,
      category,
      color,
      details,
      img,
    };

    fetch("http://localhost:5000/products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          Swal.fire(data.message)
          form.reset()         
        } else {
          Swal.fire(data.error)
        }

        console.log(data);
      });
      
    console.log(product);
  };

  return (
    <div className="p-5 w-full">
      <div className="mb-3 text-center">
        <h1 className="text-pink-800 font-semibold text-3xl">Add an Item ?</h1>
        <h3 className="text-2xl">Describe your Product</h3>
      </div>
      <form onSubmit={handleAddItem}>
        <div className="pb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">What is your Product Name?</span>
            </div>
            <input
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
              <span className="label-text">What is your Product Price?</span>
            </div>
            <input
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
                Pick the best category for your product
              </span>
            </div>
            <select className="select select-bordered" name="category">
              <option disabled selected>
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
                Pick the Color of your product
              </span>
            </div>
            <select className="select select-bordered" name="color">
              <option disabled selected>
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
              <span className="label-text">Describe your product</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="About your product"
              name="details"
            ></textarea>
          </label>
        </div>

        <div className="pb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Product Image URL</span>
            </div>
            <input
              type="text"
              name="img"
              placeholder="Input your product image url"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="mt-9">
          <button className="btn btn-outline btn-success w-full">
            Add the Product
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
  );
};

export default AddItems;
