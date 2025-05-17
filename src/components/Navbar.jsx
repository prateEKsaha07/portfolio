export default function Navbar() {
    return (
    <>
        <nav className="fixed top-0 w-full bg-navy bg-opacity-90 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-mono text-teal text-lg">yourname</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-sm font-mono hover:text-teal">About</a>
          <a href="#work" className="text-sm font-mono hover:text-teal">Work</a>
          <a href="#contact" className="text-sm font-mono hover:text-teal">Contact</a>
          <button className="text-sm font-mono border border-teal text-teal px-4 py-2 rounded hover:bg-teal/10">
            Resume
          </button>
        </div>
      </div>
    </nav>
    </>
    )
};
