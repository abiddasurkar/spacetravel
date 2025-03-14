import { useState } from "react";

function LandingPage({ navigate, loginUser }) {
    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dubai to the Stars</h1>
                        <h2 className="text-2xl text-gray-600 mb-6">The Ultimate Space Travel Experience</h2>
                        <p className="text-gray-700 mb-8">Embark on an extraordinary journey beyond Earth's atmosphere. Experience zero gravity, witness breathtaking cosmic vistas, and make history as a pioneer of commercial space travel.</p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700" onClick={() => navigate('browse')}>
                                Book Your Journey
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300" onClick={loginUser}>
                                Try Demo
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Find Your Space Adventure</h3>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium mb-2">Departure From</label>
                                <select className="border border-gray-300 rounded-md p-2">
                                    <option value="dubai">Dubai Spaceport</option>
                                    <option value="abudhabi">Abu Dhabi Launch Complex</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium mb-2">Destination</label>
                                <select className="border border-gray-300 rounded-md p-2">
                                    <option value="iss">International Space Station</option>
                                    <option value="lunar">Artemis Lunar Base</option>
                                    <option value="orbital">Orbital Hotel</option>
                                    <option value="mars">Mars Transit Experience</option>
                                </select>
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="text-gray-700 font-medium mb-2">Departure Date</label>
                                    <input type="date" min="2025-03-15" className="border border-gray-300 rounded-md p-2 w-full" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-gray-700 font-medium mb-2">Travelers</label>
                                    <select className="border border-gray-300 rounded-md p-2 w-full">
                                        <option value="1">1 Traveler</option>
                                        <option value="2">2 Travelers</option>
                                        <option value="3">3 Travelers</option>
                                        <option value="4">4 Travelers</option>
                                    </select>
                                </div>
                            </div>
                            <button className="bg-blue-600 text-white w-full py-3 rounded-md hover:bg-blue-700" onClick={() => navigate('browse')}>
                                Search Flights
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Travel to Space with Dubai<span className="text-blue-600">Space</span>?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-3xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Safety First</h3>
                            <p className="text-gray-600">Industry-leading safety protocols with 100% mission success rate.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-3xl mb-4">✨</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Experience</h3>
                            <p className="text-gray-600">Premium accommodations and five-star service even in zero gravity.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-3xl mb-4">🏆</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Pioneer Program</h3>
                            <p className="text-gray-600">Be among the first civilian space travelers in human history.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-3xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Space Travel</h3>
                            <p className="text-gray-600">Carbon-neutral launches and eco-conscious space tourism.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Popular Destinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                            <div 
                                className="h-48 bg-cover bg-center" 
                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">International Space Station</h3>
                                <p className="text-gray-600 mb-4">2-week orbital experience</p>
                                <span className="text-blue-600 font-bold">From AED 12,000,000</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                            <div 
                                className="h-48 bg-cover bg-center" 
                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Artemis Lunar Base</h3>
                                <p className="text-gray-600 mb-4">Lunar surface expedition</p>
                                <span className="text-blue-600 font-bold">From AED 45,000,000</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                            <div 
                                className="h-48 bg-cover bg-center" 
                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Orbital Hotel</h3>
                                <p className="text-gray-600 mb-4">Luxury in zero gravity</p>
                                <span className="text-blue-600 font-bold">From AED 8,500,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Voyager Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic mb-4">"The moment Earth appeared as a pale blue dot from my orbital suite window - that changed everything. Worth every dirham."</p>
                            <div className="flex items-center">
                                <img 
                                    src="https://randomuser.me/api/portraits/men/1.jpg" 
                                    alt="Mohammed A." 
                                    className="w-12 h-12 rounded-full" 
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-800">Mohammed A.</h4>
                                    <p className="text-gray-600">ISS Executive Tour</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic mb-4">"DubaiSpace's attention to detail made my lunar expedition absolutely seamless. The training program prepared me perfectly."</p>
                            <div className="flex items-center">
                                <img 
                                    src="https://randomuser.me/api/portraits/women/2.jpg" 
                                    alt="Sarah K." 
                                    className="w-12 h-12 rounded-full" 
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-800">Sarah K.</h4>
                                    <p className="text-gray-600">Lunar Surface Explorer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;