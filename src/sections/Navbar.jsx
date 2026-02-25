import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onClick }) {
  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
      <li>
        <a className="nav-link" href="#home" onClick={onClick}>
          Home
        </a>
      </li>
      <li>
        <a className="nav-link" href="#about" onClick={onClick}>
          About
        </a>
      </li>
      <li>
        <a className="nav-link" href="#work" onClick={onClick}>
          Work
        </a>
      </li>
      <li>
        <a className="nav-link" href="#project" onClick={onClick}>
          Project
        </a>
      </li>
      <li>
        <a className="nav-link" href="#achievement" onClick={onClick}>
          Achievement
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <a
            href="/"
            className="text-lg font-bold transition-colors sm:text-xl text-neutral-400 hover:text-white"
          >
            Tasyahan
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="sm:hidden w-full h-screen max-h-screen overflow-y-auto bg-primary/95 backdrop-blur-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex sm:items-center sm:justify-center h-full sm:p-0 p-5">
            <Navigation onClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;