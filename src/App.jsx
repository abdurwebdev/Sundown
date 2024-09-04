import FastMarquee from "./components/FastMarquee";
import HeroHeading from "./components/HeroHeading";
import Navbar from "./components/Navbar";
import ProjectsCards from "./components/ProjectsCards";
import VideoContainer from "./components/VideoContainer";
import LocomotiveScroll from 'locomotive-scroll';
import MoreContent from "./components/MoreContent";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
const App = () => {
  const loaderRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    }
    mainRef.current.addEventListener("contextmenu", handleContextMenu);
    return () => {
      mainRef.current.removeEventListener("contextmenu", handleContextMenu);
    }
  }, [])


  setTimeout(function () {
    loaderRef.current.style.top = "-100%";
    loaderRef.current.style.transition = "all ease 0.5s"
  }, 4000)
  const locomotiveScroll = new LocomotiveScroll();

  return <>
    <div id="loader" ref={loaderRef} className="w-full absolute z-[999] top-0  h-screen transition-transform duration-1000 bg-black flex items-center justify-center ">
      <h1 className="text-[5vw] font-bold absolute">ENVIRONMENT</h1>
      <h1 className="text-[5vw] font-bold absolute">EXPERIENCE</h1>
      <h1 className="text-[5vw] font-bold absolute">CONTENT</h1>
    </div>
    <div ref={mainRef} id="main" className="relative z-50">
      <div id="page-one" className="w-full overflow-hidden min-h-screen bg-[#EFEAE3]">
        <Navbar />
        <HeroHeading />
        <VideoContainer />
        <FastMarquee />
        <ProjectsCards />
        <MoreContent />
        <Footer />
      </div>
    </div>
  </>
}
export default App;