import React,{useState} from 'react'

const FormData_Object = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });
    const [submitForm,setSubmitForm]=useState(null);
    function handleSubmit(event) {
        event.preventDefault();
        setSubmitForm(formData); 
        setFormData({
            name:"",
            email:"",
            password:"",
        })
    }
    function handleChange(event) {
       setFormData({
         ...formData,
        [event.target.name]:event.target.value,
       });
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange}/> <br />
            <input type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}/> <br />
            <input type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange}/> <br />
            <button type="submit">submit</button>
        </form>
        <h2>
            {submitForm && 
                <div>
                    <h2>Name : {submitForm.name}</h2>
                    <p>Email : {submitForm.email}</p>
                    <p>Password :{submitForm.password}</p>
                </div>
            }
        </h2>
    </div>
  )
}

export default FormData_Object