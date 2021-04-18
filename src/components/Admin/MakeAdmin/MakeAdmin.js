import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../../Share/AdminSidebar/AdminSidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const MakeAdmin = () => {
    
    
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        const bookData = {
          email:data.email
        }
        fetch('https://lit-meadow-67847.herokuapp.com/makeAdmin',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(bookData)
            
        }) 
        .then(res => console.log(res))}
    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-10 d-flex justify-content-center">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Add a Admin</h1>
                     <div className="form-group mb-1">
                        <input name="email" type="email" placeholder="Enter Email" ref={register} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default MakeAdmin;