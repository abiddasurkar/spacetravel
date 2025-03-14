import { useState } from "react"; 

function Header({ user, navigate }) {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
                    <span className="text-xl font-bold text-gray-800">Dubai<span className="text-blue-600">Space</span></span>
                    <span className="text-xl ml-2">🚀</span>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <ul className="flex space-x-8">
                        <li className="cursor-pointer font-medium text-gray-700 hover:text-blue-600" onClick={() => navigate('browse')}>Destinations</li>
                        <li className="cursor-pointer font-medium text-gray-700 hover:text-blue-600" onClick={() => navigate('accommodations')}>Space Hotels</li>
                        <li className="cursor-pointer font-medium text-gray-700 hover:text-blue-600">Experiences</li>
                        <li className="cursor-pointer font-medium text-gray-700 hover:text-blue-600">About Us</li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center cursor-pointer" onClick={() => navigate('dashboard')}>
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                            <span className="ml-2 font-medium text-gray-700">{user.name}</span>
                        </div>
                    ) : (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={() => navigate('login')}>Sign In</button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;