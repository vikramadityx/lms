import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import DashboardIcon from '../assets/DashboardIcons/DashboardIcon'
import Customers from '../assets/DashboardIcons/Customers'
import Orders from '../assets/DashboardIcons/Orders'
import InventoryIcon from '../assets/DashboardIcons/InventoryIcon'
import Settings from '../assets/DashboardIcons/Customers'
import { useNavigate } from 'react-router-dom'

const list = [
    {
        title: "Dashboard",
        icon: <DashboardIcon color="#53545C" />,
        iconSelected: <DashboardIcon color="white" />
    },
    {
        title: "Orders",
        icon: <Orders color="#53545C" />,
        iconSelected: <Orders color="white" />
    },
    {
        title: "Customers",
        icon: <Customers color="#53545C" />,
        iconSelected: <Customers color="white" />
    },
    {
        title: "Inventory",
        icon: <InventoryIcon color="#53545C" />,
        iconSelected: <InventoryIcon color="white" />
    },
    {
        title: "Settings",
        icon: <Settings color="#53545C" />,
        iconSelected: <Settings color="white" />
    }
]

const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    const handleSideMenuClick = (index, item) => {
        setSelected(index)
        navigate(`/dashboard/${item.title.toLowerCase()}`);p
    }

    return (
        <div className='w-[296px] p-[30px] h-screen'>
            <div className='flex flex-row items-center gap-[6px]'>
                <img src={Logo} alt="Logo" />
                <h1 className='font-[Poppins] text-[20px] font-bold text-[#45464E]'>Readify</h1>
            </div>
            <div className='mt-[62px] flex flex-col gap-[10px]'>
                {
                    list.map((item, index) => {
                        return (
                            <div onClick={() => handleSideMenuClick(index, item)} key={index} className={`px-[20px] py-[16px] items-center flex flex-row gap-[16px] rounded-[12px] ${selected===index ? 'bg-[#5570F1]' : ''} cursor-pointer`}>
                                {selected === index ? item.iconSelected : item.icon}
                                <h1 className={`${selected === index ? 'text-[#fff]' : 'text-[#53545C]'} font-[inter] text-[14px]`}>{item.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar