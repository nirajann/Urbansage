import React, { useState, useEffect } from 'react';
import axios from "axios";

const AdminContactPage = () => {

   

    const [Contacts, setContacts] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:4000/contact/`)
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => console.log(err));
    }, []);
    
  

      

    return (
        <section id="contact-form">
            <div className="container shadow-lg p-3 mt-5 py-5 rounded text-center">
                <div className="container">
                    <h1 className="text-center my-5">Order Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {Contacts &&
                                Contacts?.map((Contact) => {
                                    return (
                                        [ */}
                                        {/* <tr ><td>{Contact.Fullname}</td>
                                            <td>{Contact.Email}</td>
                                            <td>RS {Contact.Description}</td>
                                            <td> */}
                                             <tr ><td>Nirajan Gautam</td>
                                            <td>Gnirajan46@gmail.com</td>
                                            <td>I am getting Error while logging in</td>
                                            <td>
                                                
                                                <button className="btn btn-success mx-2" >Verify</button>
                                                <button className="btn btn-danger mx-2" >Delete</button>
                                            </td>
                                        </tr>
                                        <tr ><td>Admin</td>
                                            <td>Admn@gmail.com</td>
                                            <td>Admin Panel Has Bug on Order delete</td>
                                            <td>
                                                
                                                <button className="btn btn-success mx-2" >Verify</button>
                                                <button className="btn btn-danger mx-2" >Delete</button>
                                            </td>
                                        </tr>
                                        <tr ><td>NirajanGautam</td>
                                            <td>NirajanGautam123@gmail.com</td>
                                            <td>this is a demo</td>
                                            <td>
                                                
                                                <button className="btn btn-success mx-2" >Verify</button>
                                                <button className="btn btn-danger mx-2" >Delete</button>
                                            </td>
                                        </tr>
                                        {/* ] 
                                    );
                                })} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default AdminContactPage;
