import React, {useState } from 'react'
import { urlFor } from '../client'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MdDownloadForOffline, v4 as uuidv4 } from "react-icons/md"
import { AiTwotoneDelete } from "react-icons/ai"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
import {client } from "../client"



const Pin = ({ pin: { postBy, image, _id, destination } }) => {
    
    const [postHovered, setPostHovered] = useState(false)
    const [savingPost, setSavingPost] = useState(false)
    const navigate = useNavigate();
    
  return (
      <div className='m-2'>
          <div
              onMouseEnter={() => setPostHovered(true)}
              onMouseLeave={() => setPostHovered(false)}
              onClick={() => navigate(`/pin-detail/${_id}`)}
              className="relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
          
          >    
          <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
              {postHovered && (
                  <div style={{height:"100%"}} className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50 '>
                      <div className='flex item-center justify-between '>
                          <div className="flex gab-2">
                              <a
                                  href={`${image?.asset?.url}?.dl=`}
                                  download
                                  onClick={(e) => { e.stopPropagation() }}
                                  className="bg-white w-9 h-9 rounded-full flex item-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hocer:shadow-md outline-none"
                              >
                                  <MdDownloadForOffline/>
                              </a>
                          </div>
                      </div>
                  </div>
          )}
          </div>
    </div>
  )
}

export default Pin
