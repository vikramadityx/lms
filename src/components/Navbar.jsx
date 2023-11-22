import React from 'react'
import NotificationIcon from '../assets/DashboardIcons/NotificationIcon'
import ProfilePicture from '../assets/profile_picture.png'

const Navbar = () => {
  return (
    <div style={{
        borderBottom: "1px solid #f1f3f9"
    }} className='dashboard-screen px-[21px] py-[14px] flex flex-row'>
        <h1 className='flex flex-1 font-[poppins] text-[20px] font-medium text-[#45464E]'>Dashboard</h1>
        <div className='flex justify-center items-center gap-[20px]'>
            <div >
                <NotificationIcon color={"#5570F1"} />
            </div>
            <div className='w-[32px] h-[32px] bg-[#efefef] rounded-[8px]'>
                <img src={ProfilePicture} alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default Navbar