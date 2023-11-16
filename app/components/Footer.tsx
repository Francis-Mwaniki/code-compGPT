// Footer.js (Footer component)

import { Mail } from "lucide-react";



const Footer = () => {
    return (
      <footer className=" text-white py-4">
        {/* help ?  */}
        <div className="container mx-auto text-center">
          <p className="text-lg">Need help?</p>
          <p className="mt-2">
            <a href="mailto:francismwaniki630@gmail.com" className="text-pink-300 hover:text-pink-400 font-bold">
                <span className="text-pink-300 hover:text-pink-400 font-bold">Contact </span>
                <Mail className=" inline-block" />
                </a>
            </p>
        </div>

        <div className="container mx-auto text-center">
          <p>Code mastery™ created by Francis Mwaniki</p>
          <p className="mt-2">© {new Date().getFullYear()} 
          {/* code mastery */}
           <a href="https://francismwaniki.tech" className="text-pink-300 hover:text-pink-400 font-bold"> Code mastery</a>
          </p>
          {/* license mit */}
           <div className="mt-2">
             <span className="text-pink-300 hover:text-pink-400 font-bold">Created Under MIT License</span>
             </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
    