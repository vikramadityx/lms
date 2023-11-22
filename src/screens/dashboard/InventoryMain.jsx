import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const InventoryMain = ({ tableData }) => {

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/dashboard/inventory/update-inventory/${id}`)
    }


    const handleDelete = async (e, id) => {
        e.stopPropagation()
        try {
            const res = await axios.delete(`http://localhost:3000/api/v1/book/${id}`)
        }
        catch (e) {
            console.log(e);
        }
    }



    return (
        <div className='w-full py-[20px] px-[28px] bg-white'>
            <table className='w-full'>
                <thead>
                    <tr className='text-left justify-between items-center font-[inter] text-[#2C2D33] text-[#14px] font-light'>
                        <th><input type="checkbox" /></th>
                        <th className='font-normal'>Book Name</th>
                        <th className='font-normal'>Author</th>
                        <th className='font-normal'>Book Number</th>
                        <th className='font-normal'>Shelf Number</th>
                        <th className='font-normal'>Quantity</th>
                        <th className='font-normal'>Lended Books</th>
                    </tr>
                    <tr>
                        <td colSpan="7">
                            <div className='w-full bg-[#E1E2E9] h-[1px] my-[18px]' />
                        </td>
                    </tr>
                </thead>
                {/* <div className='w-full bg-slate-700 h-[1px] mt-[20px] mb-[20px]' /> */}
                <tbody>
                    {
                        tableData.map((item, i) => {
                            return (
                                <tr onClick={() => handleClick(item._id)} className='text-left justify-between items-center text-[#6E7079] font-[inter] h-[48px]'>
                                    <td className='items-end h-full'><input type="checkbox" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.bookNumber}</td>
                                    <td>{item.shelfNumber}</td>
                                    <td>{item.sku}</td>
                                    <td>{item.lendedBooks}</td>
                                    <td><button onClick={(e) => handleDelete(e, item._id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default InventoryMain