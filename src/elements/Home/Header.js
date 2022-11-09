import React from "react";

import Logo from "../../Data/img/Logo.png"

function App() {
    return (
        <div className="flex justify-between items-center mt-8">
            <div className="h-auto ">
                <a href="/">
                    <img src={Logo} alt="/" className="w-60 h-outo" />
                </a>
            </div>
            <nav className="font-bold text-base flex gap-5 m-3 items-center">
                <a href="/Anasayfa" className="text-white hover:text-greener">Home</a>
                <a href="/About" className="text-white hover:text-greener">About</a>
                <a href="/Service" className="text-white hover:text-greener">Service</a>
                <button className="p-2 px-4 hover:bg-zinc-700 duration-700  bg-greener"><a href="/Book">BOOK NOW</a></button>
            </nav>
        </div>
    );
}

export default App;
