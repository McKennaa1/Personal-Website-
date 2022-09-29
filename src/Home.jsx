function Home() {
  return (
    <div>
      
      <div className="flex flex-row bg-[#fff8f3]">
        <div className="flex p-2 md:basis-1/2 lg:basis-1/2">
        <div className="">
          <h1 className="p-2 text-center text-xl md:text-2xl lg:text-left 2xl"> ABOUT</h1>
          <p className="p-2 text-justify md:text-left lg:text-left">Hello! I'm a 16 year old artist and I've been drawing for the majority of my life. The materials I use are a sketchbook and graphite pencil for the sketch, then an iPad Pro (11 inch, 2020 model) with Procreate and an Apple Pencil for the coloring and rendering.</p>
        </div>
        </div>
        <div className="hidden md:flex md:flex-col lg:flex-col lg:flex md:p-2 lg:p-2 md:basis-1/2 lg:basis-1/2 md:visible lg:visible">
          <h1 className="text-xl md:text-2xl lg:text-              2xl">CONTACT</h1>
          <p className="border-solid border-2 p-1 m-2 rounded">DM ME ON INSTAGRAM</p>
          <p className="border-solid border-2 p-1 m-2 rounded">EMAIL ME</p>
        </div>
      </div>


      
      <div className="bg-[#ebe3dd] flex flex-col text-center">
        <h1 className="text-2xl md:text-3xl lg:text-3xl">LINKS</h1>
        
        <p className="text-xl md:text-2xl lg:text-2xl">FOLLOW ME</p>
        <div className="flex flex-row">
          <img src="Links/Instagram.png" className="w-20 h-20 md:w-32 md:h-32"/>
          <img src="Links/YouTube.png"className="w-20 h-20 md:w-32 md:h-32"/>
          <img src="Links/Linktree.png" className="w-20 h-20 md:w-32 md:h-32"/>
        </div>
        <p className="text-xl md:text-2xl lg:text-2xl">COMMISSION ME</p>
        <div className="flex flex-row">
          <img src="Links/Fiverr.png" className="w-20 h-20 md:w-32 md:h-32"/>
          <img src="Links/Redbubble.png" className="w-20 h-20 md:w-32 md:h-32"/>
        </div>
    
      
  
        <div className="bg-[#fff8f3] p-2 sm:visible md:hidden lg:hidden">
          <h1 className="text-xl md:text-2xl lg:text-              2xl">CONTACT</h1>
          <div className="flex flex-col">
            <p className="border-solid border-2 p-1 m-2 rounded">DM ME ON INSTAGRAM</p>
            <p className="border-solid border-2 p-1 m-2 rounded">EMAIL ME</p>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Home;