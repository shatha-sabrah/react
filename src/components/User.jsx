import { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

function User() {
    const [formData , setFormData]= useState({
        name: '',
        email: '',
        age: '',
        status: '',


    })

    const handleChange = (e) =>{
        setFormData({ formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        localStorage.setItem('userData',JSON.stringify(formData))
        setFormData({name:'', age: '', status:'',})
    }

    return(
        <form onSubmit={handleSubmit} className='border p-3 rounded'>
            <CustomInput label="Name" name="name" type="text" id="name" value={formData.name} onChange={handleChange}/>
            <CustomInput label="Email" name="label" type="email" id="email" value={formData.email} onChange={handleChange}/>
            <CustomInput label="Age" name="age" type="number" id="age" value={formData.age} onChange={handleChange}/>
            <CustomInput label="Status" name="status" type="text" id="status" value={formData.status} onChange={handleChange}/>
            <CustomButton text="submit"/>
        </form>
    )
}
export default User