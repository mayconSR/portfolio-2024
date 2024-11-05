'use client'
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 bg-gray-800 text-white flex justify-between items-center px-6">
      <img src="logoT.svg" alt='MSR Logo' width={100} height={100}/>
      
      {/* Botão para abrir o menu no mobile */}
      <button
        className="block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Menu Desktop */}
      <nav className="hidden md:flex space-x-4">
        <Link href="#about">Sobre</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#contact">Contato</Link>
      </nav>

      {/* Menu Lateral para Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 right-0 w-2/3 max-w-xs bg-gray-900 text-white h-full shadow-lg z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="mt-16 space-y-6 px-6">
              <Link href="#about" className="block" onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
              <Link href="#projects" className="block" onClick={() => setIsOpen(false)}>
                Projetos
              </Link>
              <Link href="#contact" className="block" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
