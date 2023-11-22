import React from 'react'

const CustomButton = (props) => {
    let { label, icon, width = "148px", onClick} = props
    return (
        <button onClick={onClick} style={{
            width: width
        }} className='px-[16px] py-[17px] bg-[#5570F1] text-white font-[inter] text-[20px] rounded-[12px]' >
            {label}
        </button>
    )
}

export default CustomButton