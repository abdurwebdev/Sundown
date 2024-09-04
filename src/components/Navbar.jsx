import '../App.css'
const Navbar = () => {
  return <>
    <nav className="w-full h-20 px-5 py-14 flex items-center justify-between">
      <div>
        <img src="https://cdn.prod.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
      </div>
      <div className="flex gap-x-3 hfour">
        <h2 className="px-5 py-2 border relative border-black rounded-full"><span>Work</span></h2>
        <h2 className="px-5 py-2 border relative border-black rounded-full"><span>Studio</span></h2>
        <h2 className="px-5 py-2 border relative border-black rounded-full"><span>Contact</span></h2>
      </div>
    </nav>
  </>
}
export default Navbar;