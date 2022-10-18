import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from "react-icons/ri"
import { IoIosArrowForward } from "react-icons/io"
import logo from "../assets/logo.png"

const isActiveStyle="flex item-center px-5 gap-3 text-grey-500 font-extrabold border-r-2 border-black transition-all ease-in-out capitalize "

const isNotActiveStyle="flex item-center px-5 gap-3 text-grey-500 hover:text-black transition-all duration-200  ease-in-out capitalize"

const catagories = [
  {name: "Animal"},
  { name: "Wallpapers"},
  {name: "Photography"},
  { name: "Gaming"},
  { name: "Coding"},
  {name: "Other"},
  ]
const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false)
  }
  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scrikk min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className='flex px-5 gap-2 my-6 pt-1 w-190 cursor-pointer items-center'
        >
          <img src={logo} alt="logo" className='w-full'/>
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to="/"
             onClick={handleCloseSidebar}
            className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
          >
            <RiHomeFill/>Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover Catagories</h3>
          {catagories.slice(0, catagories.length - 1).map((catagory) => (
            <NavLink
              to={`/catagory/${catagory.name}`}
              onClick={handleCloseSidebar}
              key={catagory.name}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
            >
           {catagory.name}
         </NavLink>
       ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          onClick={handleCloseSidebar}
          className="flex my-5 mb-3 gap-2 items-center bg-white rounded-lg shadow-lg mx-3"
        >
          <img src={user.image} className="w-10 h-10 rounded-full" alt='user' />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  )
}

export default Sidebar
