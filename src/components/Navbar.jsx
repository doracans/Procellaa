import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import iconperson from "../assets/iconperson2.png"
import { navItems } from "../constants";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="mr-8 items-center" src={logo} alt="logo" width={150} />
                </div>
                <ul className="hidden lg:flex ml-4 space-x-10 justify-center">
                   {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                   ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-2 items-center">
                   <img src={iconperson} alt="" width={35} />
                    <a className= "text-black py-2 p rounded-md">
                        Saharani Pusfita
                    </a>
              
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
            </div>
            {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-200 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
             <div className="flex space-x-6">
              <button onClick={() => navigate('/Success')}
                className="py-2 px-3 rounded-md bg-black text-white"
              >
                Sign In
              </button>
             </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
