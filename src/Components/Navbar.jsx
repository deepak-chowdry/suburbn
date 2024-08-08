import Image from 'next/image';
import Link from 'next/link';
import SearchBox from "./SearchBox";
import MenuBar from './MenuBar';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-center h-[76px] shadow-sm sticky top-0 bg-zinc-50'>
                <div className='flex items-center justify-between w-11/12'>
                    <MenuBar />
                    <div id="logo" className='w-auto'>
                        <Image src={'/Img/logo-black.svg'} width={100} height={100} alt='logo' priority className='w-28'/>
                    </div>
                    <div className='flex items-center justify-end w-1/2 space-x-5'>
                        <SearchBox />
                        <Link href={'/cart'}>
                            <Image id="cart-icon" src={'/Img/bag.svg'} width={30} height={30} alt='bag' priority />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;