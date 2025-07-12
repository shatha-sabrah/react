import React from 'react'

function CustomInput({ label, name, type, id, value, onChange}){
    return(
       <div className='mb-3'>
           <label htmlFor={id} className='form-label'>{label}</label>
           <input 
           type={type}
           id={id}
           name={name}
           value={value}
           onChange={onChange}
           className='form-control'/>
       </div>
    )
}
export default CustomInput