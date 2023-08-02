import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";



const Help = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
 
  const initialstate = {
    name: "",
    email: "",
    phone: "",
  };
  const [val, setValues] = useState(initialstate);

  const getuser = () => {
    fetch("http://localhost:4000/Api/v1/getuser")
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.data);
        console.log(item.data);
      });
  };
  
  useEffect(() => {
    getuser();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...val, [name]: value });
  };

  

  const UpdateData = async (userData) => {
    const url = `http://localhost:4000/updateitem/${id,userData}`;
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const formData = new FormData();
    
      formData.append("name", val.name);
      formData.append("email", val.email);
      formData.append("phone", val.phone);

    axios
      .patch(url, formData, config)
      .then((result) => {
        console.log(result.data);  
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = val;
    if (!name || !email || !phone) {
      toast.error("Please fill out all fields");
      console.log("Please fill out all fields");
      return;
    }
    UpdateData(val);
  };



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          

            <table className="table">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {data?.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>
                        <ul>
                          <li><Link
                            className="btn "
                            to={`/form`}>
                           Edit
                            <i class="fa-solid fa-edit"></i>
                          </Link></li>
                          <li><Link to='' className='fa-solid fa-pencil'>Update</Link></li>
                         <li><Link to='' className='fa-solid fa-trash'>Delete</Link></li>
                        </ul>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>

            
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};


export default Help