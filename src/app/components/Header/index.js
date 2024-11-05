import Link from 'next/link';

const Header = () => (
  <header className="py-4 bg-gray-800 text-white text-center">
    <nav>
      <Link href="#about">Sobre</Link>
      <Link href="#projects" className="ml-4">Projetos</Link>
      <Link href="#contact" className="ml-4">Contato</Link>
    </nav>
  </header>
);

export default Header;