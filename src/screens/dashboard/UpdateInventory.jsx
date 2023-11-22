import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/CustomInput'
import UploadImage from '../../assets/DashboardIcons/UploadImage'
import UploadImageIcon from '../../assets/DashboardIcons/UploadImageIcon'
import { useParams } from 'react-router-dom'

const UpdateInventory = (props) => {

    const { setName, setAuthor, setNumber, setSku, setShelf, setId } = props;


    const {id} = useParams();

    const [book, setBook] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        setId(id);

        const fetchData = async  () => {
            try{
                const response = await fetch(`http://localhost:3000/api/v1/book/${id}`);
                const data = await response.json();
                setBook(data);
                console.log(data);
            }
            catch (e){
                console.log(e)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if(loading){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className='flex flex-row gap-[20px]'>
            <div className='py-[28px] flex flex-row gap-[100px] w-[65%] px-[33px] bg-white rounded-[12px]'>
                <div className='flex flex-col gap-[24px]'>
                    <div className='w-[484px] flex flex-col gap-[24px]'>
                        <CustomInput onChange={(e) => setName(e.target.value)} width="200px" placeholder={book.title} />
                        <CustomInput onChange={(e) => setAuthor(e.target.value)} width="200px" placeholder={book.author} />
                    </div>
                    <div className='flex flex-row gap-[20px]'>
                        <CustomInput onChange={(e) => setNumber(e.target.value)} width="200px" placeholder={book.bookNumber} />
                        <CustomInput onChange={(e) => setSku(e.target.value)} type="number" width="200px" placeholder={book.sku} />
                    </div>
                    <div>
                        <CustomInput onChange={(e) => setShelf(e.target.value)} width="200px" placeholder={book.shelfNumber} />
                    </div>
                </div>
                <div>
                    <textarea className='bg-[#f6f7fb] h-full w-[454px] p-[20px] rounded-[8px] font-[inter] text-[#abafb1] text-[16px] outline-none' placeholder='Short Description' />
                </div>
            </div>
            <div className='p-[20px] gap-[100px] bg-white rounded-[12px] w-full'>
                <div className='w-full h-full bg-[#F4F5FA] rounded-[12px] border-solid border-[1px] border-[#E1E2E9] flex flex-col justify-center items-center'>
                    <UploadImage />
                    <div className='flex flex-row gap-[12px] mt-[30px]'>
                        <UploadImageIcon />
                        <h1 className='text-[#5570F1] font-[inter] text-[16px] font-medium'>Upload Image</h1>
                    </div>
                    <h1 className='text-[#8B8D97] font-[inter] text-[14px] font-normal mt-[12px]'>Upload a cover image for your product.</h1>
                </div>
            </div>
        </div>
    )
}

export default UpdateInventory