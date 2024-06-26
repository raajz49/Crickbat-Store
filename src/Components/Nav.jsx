import {cricketbatlogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../Constants';

const Nav = () => {
  return (
   <header className='sticky  top-0 padding-x py-4 z-10 w-full mb-8  bg-white '>
    <nav className='flex justify-between items-center max-container'>
        <a href='/'>
            <img
            src={cricketbatlogo}
            alt='logo'
            width={130}
            height={29}
            className=' rounded '
            />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((item)=>(
            <li key={item.label}>
                <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                {item.label}
                </a>
            </li>
        ))}
        </ul>
        <div className='hidden max-lg:block'>
            <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            /> 
        </div>
    </nav>
   </header>
  )
}

export default Nav
