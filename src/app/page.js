import Head from 'next/head';
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio de Maycon</title>
        <meta name="description" content="Portfólio de Maycon Souza" />
      </Head>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
