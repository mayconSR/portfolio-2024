import Image from "next/image";

const About = () => (
  <section id="about" className="py-20 text-center h-[90vh]">
    <img src="logoB.svg" alt="Logo Maycon Dev" title="MayconDev" width={250} height={250} className="mx-auto mb-4 p-5 mb-5"/>
    <h1 className="text-3xl mt-4">Maycon  Silva Rodrigues</h1>
    <p className="text-gray-600 mt-2 p-4">
      Desenvolvedor front-end focado em React, Next.js e animações 3D.
    </p>
  </section>
);

export default About;