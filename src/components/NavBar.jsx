
import { Menu, X, Contact } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={` w-full transition-all duration-30`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <div
            className="flex items-center"
          >
            <Contact className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800 uppercase">
              contact  app
            </span>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                {name:"Accueil" ,path:"/"},
                {name:"historique" ,path:"#"},
                {name:"Services" ,path:"#"},
                {name:"À propos" ,path:"#"},

                
              ].map((item) => (
                <Link className="text-gray-700 hover:text-blue-600 transition-colors duration-200" key={item.name} to={item.path} >{item.name}</Link>

 
              ))}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div
          className="md:hidden"

        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {["Accueil", "Destinations", "Services", "À propos", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
