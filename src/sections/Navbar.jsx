import {useState} from "react";
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {navLinks.map(({ id, href, name}) => (
                <li key={id}>
                    <a
                        href={href}
                        className="text-neutral-400 hover:text-white transition-colors"
                        onClick={() => {}}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="h-16 flex items-center justify-between">
                    <a
                        href="/"
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    >
                        Peace
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                        aria-label="Toggle Menu"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>

                    <nav className="hidden sm:block">
                        <NavItems />
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-64' : 'max-h-0'
                }`}
            >
                <nav className="px-4 py-4 bg-black/90 border-t border-neutral-800">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar