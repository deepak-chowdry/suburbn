'use client'
import Image from 'next/image'
import Menubar from './Menubar'


const Navbar = () => {



  return (
    <>
      <div className='flex items-center justify-center h-20'>
        <div className='flex items-center justify-between w-11/12'>
          <Menubar />
          <h2>Mahadev</h2>
          <div>
            <Image src={'/search.svg'} alt='' width={20} height={20} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar