import React, { useState } from 'react'

export default function App() {
    const [formData, setFormData] = useState({});
    const handleFormChange = (e) => {
        console.log(e);
        const {name, value} = e.target;
        // console.log(e.target.name);
        // console.log(e.target.value);
        setFormData((prevState)=>({...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({});
    }
  return (
    <>
        <div>
            {JSON.stringify(formData)}
        </div>
        <form onSubmit={handleSubmit}>
            Name: <input type="text" name="name" onChange={handleFormChange} value={formData?.name ? formData.name : ''}/>
            Email: <input type='email' name="email" onChange={handleFormChange} value={formData?.email ? formData.email : ''}/>
            Age: <input type='number' name="age" onChange={handleFormChange} value={formData?.age ? formData.age : ''}/>
            <button>Submit</button>
        </form>
    </>
  )
}

/* 
    when the form is submitted I want a object to be printed in the console which contains the key and the values
    keys should be name, email, age


*/
