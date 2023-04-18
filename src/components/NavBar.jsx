import React, { useState } from 'react'
import logo from "../assets/imags/logo.png"
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'; 
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function NavBar() {
  const [open ,setOpen ]=useState(false)
  return (
    <div className='container h-32 p-8 mx-auto flex justify-between items-start '>
        <h1 className='text-4xl flex-1 font-semibold text-green-dark '>Market</h1>
        <div className='flex-1 flex justify-center'>
            <Link to={"/"}>
                <img draggable={false} className='w-20 mix-blend-darken' src={logo}/>
            </Link>
        </div>
        <div className='flex-1 flex justify-end'>
            <button onClick={()=>setOpen(p=>!p)} className={(open?" bg-green-dark ":" bg-green ")+'w-16 h-16  rounded-full z-50 hover:bg-green-dark duration-200  hover:scale-105'}>
              {
                  open?
                    <CloseRoundedIcon sx={{ color: "#fff", fontSize: 30 }}/>
                   : 
                    <MenuRoundedIcon sx={{ color: "#fff", fontSize: 30 }}/>
              }
            </button>
        </div>
        <div className={(open?" left-0 ":" left-[100vw] ")+' duration-300 delay-300 ease-out w-[100vw] h-[100vh] absolute bg-green top-0 z-40'}>

        </div>
    </div>
  )
}

export default NavBar