import React, { useEffect, useRef, useState } from 'react'

const ProjectsCards = () => {
  const containerRef = useRef();
  const fixedRef = useRef();
  const [isHovered, setisHovered] = useState(false);
  useEffect(() => {
    const handleMouseEnter = () => {
      setisHovered(true);

    }
    const handleMouseLeave = () => {
      setisHovered(false);
    }
    const container = containerRef.current;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, [])
  useEffect(() => {

    if (containerRef.current) {
      const container = containerRef.current;
      const elems = container.querySelectorAll('.elem');
      elems.forEach(elem => {
        elem.addEventListener("mouseenter", function () {
          const image = elem.getAttribute("data-image");
          fixedRef.current.style.backgroundImage = `url(${image})`;
          fixedRef.current.style.backgroundSize = 'cover';
          fixedRef.current.style.backgroundPosition = 'center';
        })
      })
    }
    return () => {

    }
  }, [])

  return (
    <>
      <div ref={fixedRef} id="fixed" className={`fixed top-32 left-[650px] w-[400px] h-[450px] ${isHovered ? 'block' : 'hidden'} rounded-xl object-cover object-center bg-red-500 z-50`}></div>
      <div className='w-full pt-32 px-5 min-h-screen'>
        <div ref={containerRef} id="elem-container">
          <div data-image="https://plus.unsplash.com/premium_photo-1694425773046-31e088f7a7dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>Kelce Super Bowl Party</h1>
          </div>
          <div data-image="https://images.unsplash.com/photo-1724805053604-4f189fb90dff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>Markers Studio HOI</h1>
          </div>
          <div data-image="https://images.unsplash.com/photo-1724838818103-a3ff16624686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>Carmelo Anthony 7pm in Brooklyn Set</h1>
          </div>
          <div data-image="https://plus.unsplash.com/premium_photo-1724155541389-e8b254d5b7c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>50th Anniversery</h1>
          </div>
          <div data-image="https://images.unsplash.com/photo-1724805053809-3c09736b2ade?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>Capizio NYC flagship</h1>
          </div>
          <div data-image="https://images.unsplash.com/photo-1724963125490-44c540b1c5cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>Play New Kidvision</h1>
          </div>
          <div data-image="https://plus.unsplash.com/premium_photo-1670176447307-c8794f768645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>NYFW popup</h1>
          </div>
          <div data-image="https://images.unsplash.com/photo-1724961446626-16959d86f9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D" className="elem border-b relative border-black py-10">
            <div className="overlay w-full h-full absolute top-[-100%] bg-orange-600"></div>
            <h1 className='text-[3vw] font-bold tracking-tighter'>Converse SoHo</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsCards