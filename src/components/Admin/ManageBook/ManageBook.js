import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Share/AdminSidebar/AdminSidebar";

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };
const ManageBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://lit-meadow-67847.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);
  const deleteBook = (id) => {
    fetch(`https://lit-meadow-67847.herokuapp.com/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
        }
      });
  };
  return (
      <section>
    <div style={containerStyle} className="container-fluid row">
      <div className="col-md-3">
        <AdminSidebar />
      </div>
      {/* render part */}
      <div className="col-md-9 mt-5 d-flex justify-content-center">
        <table className="order-table">
          <thead>
            <tr className="line-draw">
              <th scope="col">Service Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {books.map((books) => (
            <tbody key={books._id}>
              <tr className="line-draw">
                <td>{books.name}</td>
                <td>${books.price}</td>
                <td>
                  <button
                    onClick={() => deleteBook(books._id)}
                    className="btn btn-success"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
      </section>
  );
};

export default ManageBook;
