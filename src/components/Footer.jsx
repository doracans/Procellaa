import { PageLinks} from "../constants";
import logo from "../assets/logo.png"
import Icons from "./Icons";
import ContactForm from "./ContactForm";
import { Data4 } from "../data/Data";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const [icons] = useState(Data4)
  const navigate = useNavigate()

  return (
    <footer className="bg-[#FEF8EA]">
      <div className="md:flex md:justify-between md:items-center sm:px-24 px-4 py-7  md:border-b-2" style={{borderBottom: "2px solid #000"}}>
        <div className="md:mb-0 mb-6 lg:leading-normal 
     md:w-2/5">
          <img src={logo} alt="procella" width={150} />
        </div>
        <div className="">
        <Icons />
        </div>
        
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-14 pb-20 sm:px-4">
        <div>
          <ContactForm/>
        </div>
        <div className="pl-56">
          <h3 className="text-md font-semibold mb-5 mt-16">Pages</h3>
          <ul className="space-y-2">
            {PageLinks.map((Link, index) => (
              <li key={index}>
                <a
                  className="text-black hover:text-gray-400"
                  href={Link.href}>
                  {Link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-16">
            <h3 className=" text-md font-semibold mb-5">Phone</h3>
            <button onClick={() => navigate('/Nopage')}>
              0000-0000-0000
            </button>
          </div>
        </div>
        <div className="pl-32">
          <h3 className="text-md font-semibold mb-5 mt-16">Social</h3>
          <div className="grid grid-cols-10 gap-3">
          {icons.map((item, index) =>(
            <div key={index}>
             <button onClick={() => navigate('/Nopage')}>
              <img src={item.image} alt="icon" />
             </button>
            </div>
          ))}
          </div>
          <div className="pt-32">
            <h3 className=" text-md font-semibold mb-5">Email</h3>
            <button onClick={() => navigate('/Nopage')}> 
              Procella@gmail.com
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
