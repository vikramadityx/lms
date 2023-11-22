import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import SearchIcon from '../assets/SearchIcon.svg'
import { useNavigate } from 'react-router-dom'

const BookList = () => {

    const [allBooks, setAllBooks] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/v1/book/");
                const data = await response.json();
                setAllBooks(data.books);
                console.log(data);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])

    const handleBookCardClick = (id) => {
        navigate(`/borrow/${id}`)
    }   

    return (
        <div >
            <div className='mt-[20px]'>
                <CustomInput iconSrc={SearchIcon} type="text" showIcon={true} />
            </div>
            <div className='flex flex-row flex-wrap gap-[20px] mt-[20px]'>
                {
                    allBooks.map((item) => {
                        return (
                            <div onClick={() => handleBookCardClick(item._id)} key={item._id} className='border border-b-2 p-[10px] rounded-[10px]'>
                                <h1 className='font-[poppins] text-xl'>{item.title}</h1>
                                <h1 className='font-[poppins] text-sm'>{item.author}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BookList