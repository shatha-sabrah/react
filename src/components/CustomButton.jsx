import React from 'react'

function CustomButton({text}){
    return (
    <button type='submit' className='btn btn-primary'>
        {text}
    </button>
    )
}
export default CustomButton