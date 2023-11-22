import React from 'react'
import Navbar from '../components/Navbar'
import BookList from '../components/BookList'


const Borrow = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <Navbar />
            
            <BookList />
        </div>
    )
}

export default Borrow