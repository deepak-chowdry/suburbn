import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-center h-20'>
        <div className='flex items-center justify-between w-11/12'>
          <div>
            <svg
              width="22"
              height="16"
              id="menubtn"
              stroke="#000"
              className="cursor-pointer z-50"
            >
              <path d="M 0 5 L 25 5" />
              <path d="M 0 13 L 25 13" />
            </svg>
          </div>
          <h2>Mahadev</h2>
          <div>
            <Image src={'/search.svg'} alt='' width={20} height={20}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar