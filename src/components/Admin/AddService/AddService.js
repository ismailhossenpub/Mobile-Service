import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AdminSidebar from "../../Share/AdminSidebar/AdminSidebar";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const AddService = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const bookData = {
      name: data.name,
      description: data.description,
      image: imageURL,
      price: data.price,
    };
    const url = `https://lit-meadow-67847.herokuapp.com/addService`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    }).then((res) => console.log("server side response", res));
  };
  const handleImageUpload = (book) => {
    const imageData = new FormData();
    imageData.set("key", "70f03499b47cc0c6361945e260f26a2e");
    imageData.append("image", book.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 d-flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add a service</h1>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputEmail1">Service Title</label>
              <br />
              <input name="name" placeholder="Enter Title" ref={register} />
            </div>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputPassword1">Description</label> <br />
              <textarea
                name="description"
                placeholder="Enter service Description"
                ref={register}
              />
            </div>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputPassword1">Price</label>
              <br />
              <input
                name="price"
                placeholder="Enter service price"
                ref={register}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputPassword1">Upload a image</label>
              <br />
              <input
                name="exampleRequired"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
