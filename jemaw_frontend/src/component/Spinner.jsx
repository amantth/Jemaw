import React from 'react'
import * as Loader from "react-loader-spinner"

function Spinner({message}) {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
          <Loader
              type="Circle"
              color="#00BFFF"
              height={50}
              width={200}
              className="m-5"
          />
          <p className='text-lg px-2 text-center'>{message}</p>
    </div>
  )
}

export default Spinner
