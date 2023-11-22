import React from 'react'

const CustomInput = (props) => {
    const {iconSrc, placeholder, showIcon=false, width = "375px", type="text", onChange} = props
    return (
        <div className='rounded-[8px] flex flex-row justify-start gap-[16px] bg-[#f6f7fb]'>
            {showIcon && <img src={iconSrc} className='ml-[16px]' alt="img" />}
            <input onChange={onChange} style={{
                width: width,
                margin: '16px',
            }} type={type} className='text-[#ABAFB1] bg-white/0 flex-1 text-[16px] font-[inter] outline-none' placeholder={placeholder} />
        </div>
    )
}

export default CustomInput