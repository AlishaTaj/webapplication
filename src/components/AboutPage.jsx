import * as React from "react";
import { useState } from "react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-background font-poppins min-h-screen flex flex-col justify-between'>
      <header className='bg-white shadow-md'>
        <nav className='container mx-auto flex justify-between items-center py-4 px-8'>
          <div className='flex items-center'>
            <img src='/logo.png' alt='Logo' className='h-12' />
          </div>
          <div className='hidden md:flex items-center space-x-8 text-lg text-gray-700'>
            <a href="#home" className='hover:underline'>Home</a>
            <a href="#how-to-use" className='hover:underline'>How to Use</a>
            <a href="#pricing" className='hover:underline'>Pricing</a>
            <a href="#about" className='hover:underline'>About</a>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <a href="#new-account" className='px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90'>New Account</a>
            <a href="#sign-in" className='px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition'>Sign In</a>
          </div>
          <button className='md:hidden flex items-center' onClick={toggleMenu}>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div className='fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-50'>
            <button className='absolute top-4 right-4' onClick={toggleMenu}>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </button>
            <ul className='flex flex-col items-center space-y-4 text-lg text-gray-700'>
              <li><a href="#home" className='hover:underline' onClick={toggleMenu}>Home</a></li>
              <li><a href="#how-to-use" className='hover:underline' onClick={toggleMenu}>How to Use</a></li>
              <li><a href="#pricing" className='hover:underline' onClick={toggleMenu}>Pricing</a></li>
              <li><a href="#about" className='hover:underline' onClick={toggleMenu}>About</a></li>
              <li><a href="#new-account" className='px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90' onClick={toggleMenu}>New Account</a></li>
              <li><a href="#sign-in" className='px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition' onClick={toggleMenu}>Sign In</a></li>
            </ul>
          </div>
        )}
      </header>

      <main className='container mx-auto px-4 md:px-8 lg:px-24 py-16'>
        <section className='max-w-screen-lg mx-auto mb-16 px-4 text-left'>
          <h1 className='text-3xl md:text-5xl text-black font-avant-garde mb-4'>Shape Your Voice, Automate Your Impact</h1>
          <h2 className='text-2xl md:text-3xl text-gray-700 font-avant-garde'>EngageX empowers you to customize and automate your LinkedIn comments. Seamlessly switch between professional and personal tones with our intelligent platform, ensuring every interaction is impactful and efficient.</h2>
        </section>

        <section className='max-w-screen-lg mx-auto mb-16 px-4'>
          <div className='flex flex-col md:flex-row justify-between gap-4'>
            <img src='' alt='Team Working' className='w-full md:w-1/3 h-auto rounded-xl shadow-md' />
            <img src='' alt='Team Group 1' className='w-full md:w-1/3 h-auto rounded-xl shadow-md' />
            <img src='' alt='Team Group 2' className='w-full md:w-1/3 h-auto rounded-xl shadow-md' />
          </div>
        </section>

        <section className='max-w-screen-lg mx-auto mb-16 px-4 text-left'>
          <h2 className='text-3xl md:text-4xl text-black font-avant-garde mb-8'>Our Values</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='bg-white p-8 rounded-xl shadow-lg flex flex-col items-start'>
              <i className="bi bi-pencil-square text-primary text-4xl mb-4"></i>
              <p className='text-xl text-black'>Personalize Your Interactions</p>
              <p className='text-gray-700 mt-2'>We believe every interaction should reflect your unique voice. With our platform, you can customize your comments to be as professional or personal as you like, ensuring each engagement is genuine and true to you.</p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg flex flex-col items-start'>
              <i className="bi bi-lightbulb text-primary text-4xl mb-4"></i>
              <p className='text-xl text-black'>Embrace Innovation</p>
              <p className='text-gray-700 mt-2'>We are committed to continuous improvement. Our cutting-edge technology evolves to provide you with the best tools for automated LinkedIn engagement, helping you stay ahead of the curve and maintain a competitive edge.</p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg flex flex-col items-start'>
              <i className="bi bi-sliders text-primary text-4xl mb-4"></i>
              <p className='text-xl text-black'>Keep It Simple</p>
              <p className='text-gray-700 mt-2'>We prioritize making our system intuitive and easy to use. Our platform simplifies managing your LinkedIn interactions, so you can focus on building meaningful connections without getting bogged down by complexity.</p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg flex flex-col items-start'>
              <i className="bi bi-people text-primary text-4xl mb-4"></i>
              <p className='text-xl text-black'>Engage Meaningfully</p>
              <p className='text-gray-700 mt-2'>We place building strong relationships at the heart of EngageX. Our system ensures your comments are thoughtful and relevant, helping you engage with your network effectively and foster deeper, more meaningful connections.</p>
            </div>
          </div>
        </section>

        <section className='max-w-screen-lg mx-auto px-4 text-left'>
          <h2 className='text-3xl md:text-4xl text-black font-avant-garde mb-8'>Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[
              { name: 'Avi Sahi', title: 'Role', imgSrc: '/images/avi.jpg', linkedIn: 'https://linkedin.com/in/sahiavi' },
              { name: 'Ginniee Sahi', title: 'Role', imgSrc: '/images/ginniee.jpg', linkedIn: 'https://linkedin.com/in/ginniee-sahi-0580574' },
              { name: 'Mokshith P', title: 'Role', imgSrc: '/images/mokshith-p.jpg', linkedIn: 'https://www.linkedin.com/in/mokshith-p-5948752a9' },
              { name: 'Sushan Rai', title: 'Role', imgSrc: '/images/sushan-rai.jpg', linkedIn: 'https://linkedin.com/in/sushan-rai' },
              { name: 'Venkatesh Vijayraj Ankola', title: 'Role', imgSrc: '/images/venkatesh-vijayraj.jpg', linkedIn: 'https://linkedin.com/in/venkatesh-ankola' },
              { name: 'Alisha Taj', title: 'Role', imgSrc: '/images/alisha.jpg', linkedIn: 'https://linkedin.com/in/alisha-taj' },
              { name: 'Manvitha R Kabbathi', title: 'Role', imgSrc: '/images/mavitha.jpg', linkedIn: 'https://linkedin.com/in/manvitha-r-kabbathi-a06097219' },
              { name: 'Kommuri Jaidev Shankar Reddy', title: 'Role', imgSrc: '/images/jaidev-reddy.jpg', linkedIn: 'https://linkedin.com/in/jaidev-reddy-77584b2a9' },
              { name: 'Advik Rajesh Holalu', title: 'Role', imgSrc: '/images/advik-holalu.jpg', linkedIn: 'https://linkedin.com/in/advik-r-holalu-5a1592268' },
              { name: 'Kunal Prasad', title: 'Role', imgSrc: '/images/kunal-prasad.jpg', linkedIn: 'https://linkedin.com/in/kunal-prasad-yoursocialark' },
              { name: 'Maithreyee', title: 'Role', imgSrc: '/images/maithreyee.jpg', linkedIn: 'https://linkedin.com/in/emilywhite' },
            ].map((member, index) => (
              <a key={index} href={member.linkedIn} target="_blank" rel="noopener noreferrer" className='bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4'>
                <img src={member.imgSrc} alt={member.name} className='w-16 h-16 rounded-full'/>
                <div>
                  <p className='text-xl text-black'>{member.name}</p>
                  <p className='text-lg text-gray-700'>{member.title}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className='bg-black text-white py-6'>
        <div className='container mx-auto flex justify-between items-center'>
          <p className='text-sm'>© 2024 EngageXapp, All rights reserved.</p>
          <div className='flex space-x-4'>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-opacity-75'>
              <i className='bi bi-linkedin text-xl'></i>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-opacity-75'>
              <i className='bi bi-twitter text-xl'></i>
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-opacity-75'>
              <i className='bi bi-instagram text-xl'></i>
            </a>
            <a href='https://telegram.org' target='_blank' rel='noopener noreferrer' className='hover:text-opacity-75'>
              <i className='bi bi-telegram text-xl'></i>
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-opacity-75'>
              <i className='bi bi-facebook text-xl'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
