import React from 'react'

const VideoContainer = () => {
  return (
    <section className='w-full mt-11 relative min-h-screen rounded-2xl'>
      <div id="goeey" className='w-[60vw] z-0 p-0 rounded-tl-full rounded-bl-full h-[90vh] -top-40  bg-[#FF330A] absolute right-0'>
        <div id="box1" className='w-full h-full rounded-full bg-[#FF330A] absolute'></div>
        <div id="box2" className='w-full h-full rounded-full bg-[#FF330A] absolute'></div>
      </div>
      <video autoPlay loop muted className='p-5 rounded-[40px] relative z-10' src="https://player.vimeo.com/progressive_redirect/playback/915350257/rendition/1080p/file.mp4?loc=external&signature=768f26c5396775e76c340cb808a897a724e78acb8231106dd94af9d732695176"></video>
    </section>
  )
}

export default VideoContainer