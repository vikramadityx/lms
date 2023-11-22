import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Message from '../assets/Message.svg'
import Lock from '../assets/Lock.svg'
import CustomInput from '../components/CustomInput'
import Profile from '../assets/Profile.svg'
import DP from '../assets/DP.svg'

const SignUp = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState(""); 
    
    const formData = {
        email: email,
        password: password,
        role: role
    }

    const handleSignUp = async () => {
        try{
            const res = await axios.post("http://localhost:3000/api/v1/user/register", formData);
            const d = await res.json();
            alert(d);
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className='bg-[#F4F5FA] h-screen flex justify-center items-center '>
            <div className="px-[34px] py-[44px] w-fit bg-white flex flex-col justify-center rounded-[12px]">
                <div className='flex flex-col items-center gap-[30px]'>
                    <img className='w-[50px]' src={Logo} alt="Logo" />
                    <div className='flex flex-col items-center'>
                        <p className='font-[inter] text-[20px] font-medium leading-normal'>Get Started with <span className='text-[#5570F1] font-semibold'>Readify</span></p>
                        <p className='font-[inter] text-[14px] text-[#8b8d97] font-normal'>Create your free account</p>
                    </div>
                </div>
                <div className='mt-[60px] flex flex-col gap-[30px]'>
                    <CustomInput onChange={(e) => setUsername(e.target.value)} showIcon={true} iconSrc={Profile} placeholder="Username" />
                    <CustomInput onChange={(e) => setEmail(e.target.value)} showIcon={true} iconSrc={Message} placeholder="Email Address" />
                    <CustomInput onChange={(e) => setPassword(e.target.value)} showIcon={true} iconSrc={Lock} placeholder="Create a Strong Password" />
                    <div className='rounded-[8px] flex flex-row justify-start gap-[16px] p-[16px] bg-[#f6f7fb] w-[375px]'>
                        <img src={DP} alt="Email" />
                        <input type="file" className='text-[#ABAFB1] bg-white/0 flex-1 text-[16px] font-[inter] pl- outline-none file-button' placeholder="INPUT" />
                    </div>
                </div>
                <div className='flex flex-row gap-[20px]'>
                    <div>
                        <input onChange={() => setRole(e.target.id)} value={"institute"} type="radio" name="role" />
                        <label>Institute</label>
                    </div>
                    <div>
                        <input onChange={() => setRole(e.target.id)} value={"institute"} type="radio" name="role" />
                        <label>Student</label>
                    </div>
                </div>
                <div className='my-[48px]'>
                    <h1 className='text-[#8B8D97] font-[inter] text-[14px] text-center'>Already have an account? <span className='text-[#5570F1]'> Login </span></h1>
                </div>
                <div className='flex justify-center'>
                    <button className='px-[16px] py-[17px] w-[148px] bg-[#5570F1] text-white font-[inter] text-[20px] rounded-[12px]' >Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp