import React from 'react'
import Graph from '../assets/DashboardIcons/Graph'
import DownArrow from '../assets/DashboardIcons/DownArrow'

const DashboardCard = () => {
    return (
        <div className='px-[15px] py-[11px] w-[300px] h-[130px] flex flex-col bg-white justify-between rounded-[12px]'>
            <div className='flex flex-row justify-between'>
                <div className='p-[8px] rounded-[8px] bg-[#EAEDFD] w-fit'>
                    <Graph color="#5570f1" />
                </div>
                <div className='flex flex-row items-center gap-[7px]'>
                    <h1 className='text-[#BEC0CA] font-[inter] text-[12px]'>This Week</h1>
                    <DownArrow color="#BEC0CA" />
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>
                    <h1 className='font-[inter] text-[14px] text-[#8B8D97]'>Sales</h1>
                    <div className='flex flex-row gap-[7px] items-center'>
                        <h1 className='text-[#45464E] font-[poppins] font-medium text-[20px]'>$0.00</h1>
                        <h1 className='text-[#519C66] font-[poppins] font-normal text-[12px]'>+0.00%</h1>
                    </div>
                </div>
                <div className=''>
                    <h1 className='font-[inter] text-[14px] text-[#8B8D97]'>Volume</h1>
                    <div className='flex flex-row gap-[7px] items-center'>
                        <h1 className='text-[#45464E] font-[poppins] font-medium text-[20px]'>0</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard