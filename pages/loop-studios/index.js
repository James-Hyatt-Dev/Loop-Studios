import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/loop-studios/images/logo.svg';
import Interactive from '../../public/loop-studios/images/desktop/image-interactive.jpg';
import DeepEarth from '../../public/loop-studios/images/desktop/image-deep-earth.jpg';
import DeepEarthMobile from '../../public/loop-studios/images/mobile/image-deep-earth.jpg';
import NightArcade from '../../public/loop-studios/images/desktop/image-night-arcade.jpg';
import NightArcadeMobile from '../../public/loop-studios/images/mobile/image-night-arcade.jpg';
import SoccerTeam from '../../public/loop-studios/images/desktop/image-soccer-team.jpg';
import SoccerTeamMobile from '../../public/loop-studios/images/mobile/image-soccer-team.jpg';
import ImageGrid from '../../public/loop-studios/images/desktop/image-grid.jpg';
import ImageGridMobile from '../../public/loop-studios/images/mobile/image-grid.jpg';
import FromAbove from '../../public/loop-studios/images/desktop/image-from-above.jpg';
import FromAboveMobile from '../../public/loop-studios/images/mobile/image-from-above.jpg';
import Pocket from '../../public/loop-studios/images/desktop/image-pocket-borealis.jpg';
import PocketMobile from '../../public/loop-studios/images/mobile/image-pocket-borealis.jpg';
import ImageCuriosity from '../../public/loop-studios/images/desktop/image-curiosity.jpg';
import ImageCuriosityMobile from '../../public/loop-studios/images/mobile/image-curiosity.jpg';
import FishEye from '../../public/loop-studios/images/desktop/image-fisheye.jpg';
import FishEyeMobile from '../../public/loop-studios/images/mobile/image-fisheye.jpg';
import Facebook from '../../public/loop-studios/images/icon-facebook.svg';
import Twitter from '../../public/loop-studios/images/icon-twitter.svg';
import Instagram from '../../public/loop-studios/images/icon-instagram.svg';
import Pinterest from '../../public/loop-studios/images/icon-pinterest.svg';


// const btn = document.querySelector('#menu-btn');
// const menu = document.querySelector('#menu');

function LoopStudios() {

    // mobile menu js
    function buttonHandler(e) {
      e.preventDefault();

      const btn = e.target;
      const menu = document.querySelector('#menu');

      btn.classList.toggle('open');

      // menu show/hide
      menu.classList.toggle('flex')
      menu.classList.toggle('hidden')
    }
    
  return (
    // hero
    <div>
      <Head>
        <title>Loop Studios Project</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap" rel="document" />
      </Head>

      <section id="hero">
        <div className="container max-w-10xl mx-auto px-6 py-12">
          <nav className="flex gap-6 items-center font-bold text-white">
            {/* logo */}
            <div className='flex flex-1'>
              <Image src={Logo} alt='logo' />
            </div>
            {/* menu */}
            <div className='flex gap-6'>
              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                  <Link href='#'>About</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>

              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                  <Link href='#'>Careers</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>

              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                  <Link href='#'>Events</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>

              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                  <Link href='#'>Products</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>

              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                  <Link href='#'>Support</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* hamburger */}
            <div id='menu-btn'  className="md:hidden" onClick={buttonHandler}>
              <button className="z-40 block hamburger md:md:hidden focus:outline-none" type='button'>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>

          </nav>

          {/*  mobile menu goes here */}
          <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
            <a href="#" className="hover:text-pink-500">About</a>
            <a href="#" className="hover:text-pink-500">Careers</a>
            <a href="#" className="hover:text-pink-500">Events</a>
            <a href="#" className="hover:text-pink-500">Products</a>
            <a href="#" className="hover:text-pink-500"Support></a>
          </div>


          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>

      {/* feature section */}
      <section id="features">
        {/* feature container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-5 text-gray-900 md:flex-row md:px-0">
          <Image src={Interactive} alt='interactive image' />

          {/* text container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, LoopStudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* our creations */}
      <section id="creations">
        {/* creation container  */}
        <div className="container max-w-6xl mx-auto my-32 px 6 text-gray-900 md:px-0">
          {/* creations header */}
          <div className="flex justify-center mb-20 md:justify-around">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            {/* button */}
            <button className="btn hidden md:block">
              See All
            </button>
          </div>

          {/* items container */}
          <div className="item-container">
            {/* item 1 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={DeepEarth} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={DeepEarthMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>Deep Earth</h5>
            </div>

            {/* item 2 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={NightArcade} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={NightArcadeMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>Night Arcade</h5>
            </div>

            {/* item 3 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={SoccerTeam} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={SoccerTeamMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>Soccer Team VR</h5>
            </div>

            {/* item 4 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={ImageGrid} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={ImageGridMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>Deep Earth</h5>
            </div>
          </div>


          {/* second item container */}
          <div className="item-container">
            {/* item 1 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={FromAbove} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={FromAboveMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>From Above VR</h5>
            </div>

            {/* item 2 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={Pocket} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={PocketMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>Pocket Borealis</h5>
            </div>

            {/* item 3 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={ImageCuriosity} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={ImageCuriosityMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>The Curiosity</h5>
            </div>

            {/* item 4 */}
            <div className="group item">
              {/* desktop image */}
              <Image className='hidden w-full duration-200 md:block group-hover:scale-110' src={FishEye} alt='image of a big hole' />
              {/* mobile image */}
              <Image className='w-full md:hidden' src={FishEyeMobile} alt='image of a big ass hole' />
              {/* item gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>Make it Fisheye</h5>
            </div>
          </div>

          {/* bottom button container */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full mx-6 md:hidden">
              See All
            </button>
          </div>

        </div>
      </section>

      {/* footer */}
      <footer className="bg-black">
        {/* container for footer */}
        <div className="container flex flex-col max-w-10xl px-6 py-10 mx-auto md:flex-row md:justify-between ">
          {/* footer flex container */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:space-y-0 md:justify-between md:items-start">
            {/* menu & logo container */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* logo */}
              <div className="h-8 mb-4">
                <Image className='w-44 md:ml-3 ' src={Logo} alt="Logo" />
              </div>
            </div>
            {/* menu container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* item 1 */}
              <div className="h-10 group">
                <Link href='#'>About</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* item 2 */}
              <div className="h-10 group">
                <Link href='#'>Careers</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* item 3 */}
              <div className="h-10 group">
                <Link href='#'>Events</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* item 4 */}
              <div className="h-10 group">
                <Link href='#'>products</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* item 5 */}
              <div className="h-10 group">
                <Link href='#'></Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

            </div>
          </div>





          {/* social and copyright container */}
          <div className="flex flex-col items-start space-y-4 text-gray-500">
            {/* icons container */}
            <div className="flex items-center mx-auto justify-center space-x-4 md:justify-end md:mx-0">
              {/* icon 1 */}
              <div className="h-8 group">
                <Link href='#'>
                  <Image className='h-6' src={Facebook} alt='facebook' />
                </Link>
              </div>

              {/* icon 2 */}
              <div className="h-8 group">
                <Link href='#'>
                  <Image className='h-6' src={Twitter} alt='facebook' />
                </Link>
              </div>

              {/* icon 3 */}
              <div className="h-8 group">
                <Link href='#'>
                  <Image className='h-6' src={Pinterest} alt='facebook' />
                </Link>
              </div>

              {/* icon 4 */}
              <div className="h-8 group">
                <Link href='#'>
                  <Image className='h-6' src={Instagram} alt='facebook' />
                </Link>
              </div>
            </div>

            {/* © */}
            <div className="font-bold flex mx-auto">
              &copy; 2022 LoopStudios. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default LoopStudios