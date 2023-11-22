import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import PlusIcon from '../../assets/DashboardIcons/PlusIcon';
import NewInventory from './NewInventory';
import InventoryMain from './InventoryMain';
import axios from 'axios'
import UpdateInventory from './UpdateInventory';

const Inventory = () => {


  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");
  const [sku, setSku] = useState(0);
  const [shelf, setShelf] = useState("");
  const [institute,] = useState(null);
  const [id, setId] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  // const { id } = useParams();

  const formData = {
    title: name,
    author: author,
    instituteName: institute,
    bookNumber: number,
    images: "",
    shelfNumber: shelf,
    sku: sku
  }

  const handleAddNewBook = async (e) => {
    // console.log(location)
    e.preventDefault();
    navigate('/dashboard/inventory/new-inventory');
    // // console.log(formData);
    // try {
    //   const response = await axios.post("http://localhost:3000/api/v1/book/add", formData);
    //   console.log("Book added successfully!", response.data);
    // } catch (error) {
    //   console.error("Error adding book:", error);
    // }
  }

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/book/add", formData);
      console.log("Book added successfully!", response.data);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    console.log(id, "id");
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/book/${id}`, formData);
      console.log("Book added successfully!", response.data);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }


  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/book");
        const data = await response.json();
        setTableData(data.books); // Assuming the response object has a 'books' property containing the array of books
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='pt-[23px] px-[20px] dashboard-height flex flex-col gap-[20px] bg-[#F4F5FA]'>
      <div className='flex flex-row items-center h-[36px]'>
        <h1 className='flex-1 font-[inter] text-[#45464E] text-[16px] font-medium'>Inventory Summary</h1>
        {location.pathname === "/dashboard/inventory" ? <button onClick={handleAddNewBook} className='bg-[#5570F1] flex flex-row px-[22px] py-[6px] items-center rounded-[12px]'>
          <PlusIcon color={"white"} />
          <h1 className='ml-[8px] font-[inter] text-[14px] font-normal text-white'>Add a New Book</h1>
        </button>
          :
          <button onClick={location.pathname === "/dashboard/inventory/new-inventory" ? handleAddBook : handleUpdateBook} className='bg-[#5570F1] flex flex-row px-[22px] py-[6px] items-center rounded-[12px]'>
            <PlusIcon color={"white"} />
            <h1 className='ml-[8px] font-[inter] text-[14px] font-normal text-white'>{location.pathname === "/dashboard/inventory/new-inventory" ? "Add Book" : "Update Book"}</h1>
          </button>
        }
      </div>
      <Routes>
        <Route path="/" element={<InventoryMain tableData={tableData} />} />
        <Route path='/new-inventory' element={<NewInventory
          setName={setName}
          setShelf={setShelf}
          setSku={setSku}
          setNumber={setNumber}
          setAuthor={setAuthor}
        />} />
        <Route path="/update-inventory/:id" element={<UpdateInventory
          setName={setName}
          setShelf={setShelf}
          setSku={setSku}
          setNumber={setNumber}
          setAuthor={setAuthor}
          setId = {setId}
        />} />
      </Routes>
    </div>
  )
}

export default Inventory