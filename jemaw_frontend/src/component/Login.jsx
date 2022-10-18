import React from 'react'
import GoogelLogin from "react-google-login"
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"
import {gapi} from "gapi-script"
import { useEffect } from 'react';
import {client} from "../client"


function Login() {

  const navigate = useNavigate();
const clientId="126670098417-c8u827mejkvelvkn738k5c1gm4cv3dbo.apps.googleusercontent.com"
  useEffect(() => {
    gapi.load("client:auth2", () => {
    gapi.auth2.init({clientId:clientId})
    })
  },[])
  const responseGoogle=(response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj))
    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image:imageUrl,
    }
    client.createIfNotExists(doc).then(() => {
  navigate("/",{replace:true})
})

  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='w-full h-full relative'>
        <video 
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'

        />
        <div className='absolute flex flex-col justify-center items-center left-0 right-0 top-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className='shadow-2xl'>
            <GoogelLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  type='button'
                  className='flex mb-4 justify-center items-center p-3 rounded-lg cursor-pointer outline-none bg-mainColor'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  
                >
               <FcGoogle className='mr-4'/> Sign in with Google 
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Login
