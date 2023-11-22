import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomButton from '../components/CustomButton';

const BookInfo = () => {

    const { id } = useParams();
    const [bookInfo, setBookInfo] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/book/${id}`);
                const data = await response.json();
                setBookInfo(data);
                console.log(data);
            } catch (e) {
                console.log(e)
            }
            finally {
                setLoading(false)
            }
        }
        fetchBook();
    }, [])

    const handleBorrow = async () => {
        // try {
        //     const response = await axios.post("http://localhost:3000/api/v1/transaction/create", formData);
        //     console.log("Book added successfully!", response.data);
        // } catch (error) {
        //     console.error("Error adding book:", error);
        // }
        alert("Book Borrowed");
    }

    if (loading) {
        return (
            <div>Loading.....</div>
        )
    }

    return (
        <div className='p-[100px] flex flex-col justify-center items-center '>
            <div className='flex flex-col justify-center items-center p-[20px] rounded-md border-black border-2 '>
                <h1 className='font-[poppins] text-[100px]'> {bookInfo.title}</h1>
                <div className='flex flex-row gap-[10px] items-center'>
                    <h1 className='font-bold text-[20px]'>Author : </h1>
                    <h1>{bookInfo.author}</h1>
                </div>
                <div className='flex flex-row gap-[10px] items-center'>
                    <h1 className='font-bold text-[20px]'>Shelf : </h1>
                    <h1>{bookInfo.shelfNumber}</h1>
                </div>
                <div className='flex flex-row gap-[10px] items-center'>
                    <h1 className='font-bold text-[20px]'>Book Id : </h1>
                    <h1>{bookInfo.bookNumber}</h1>
                </div>
                <div className='flex flex-row gap-[10px] items-center'>
                    <h1 className='font-bold text-[20px]'>Books Left: </h1>
                    <h1>{bookInfo.sku}</h1>
                </div>
            </div>
            <div className='mt-[20px]'>
                <CustomButton onClick={handleBorrow} label="Borrow This Book" width="200px" />
            </div>
        </div>
    )
}

export default BookInfo