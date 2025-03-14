import { useState } from "react";

function Dashboard({ user, bookings, navigate }) {
    const [activeTab, setActiveTab] = useState('upcoming');

    const filteredBookings = activeTab === 'upcoming'
        ? bookings.filter(b => new Date(b.departureDate) > new Date())
        : bookings;

    const travelTips = [
        "Prepare for your journey with our zero-G adaptation exercises starting 3 weeks before departure.",
        "Pack light - remember everything weighs differently in space!",
        "Stay hydrated before, during and after your space journey.",
        "Bring a small personal item to leave at the ISS visitor's collection.",
        "The best views of Earth are often from the observation deck during orbit sunrise."
    ];

    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user.name}</h1>
                                <span className="text-gray-600">{user.membershipLevel}</span>
                            </div>
                        </div>
                        <button
                            className="bg-blue-600 text-white px-6 py-2 rounded-md"
                            onClick={() => navigate('browse')}
                        >
                            Book New Journey
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800">Your Space Journeys</h2>
                                <div className="flex space-x-4">
                                    <button
                                        className={`px-4 py-2 rounded-md ${activeTab === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                                            }`}
                                        onClick={() => setActiveTab('upcoming')}
                                    >
                                        Upcoming
                                    </button>
                                    <button
                                        className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                                            }`}
                                        onClick={() => setActiveTab('all')}
                                    >
                                        All Bookings
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {filteredBookings.length > 0 ? (
                                    filteredBookings.map(booking => (
                                        <div key={booking.id} className="bg-white p-6 rounded-lg shadow-md">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{booking.tripName}</h3>
                                                    <div className="text-gray-600">
                                                        <span><i className="fas fa-map-marker-alt mr-2"></i> {booking.destination}</span>
                                                        <span className="mx-4">|</span>
                                                        <span><i className="fas fa-calendar-alt mr-2"></i> Departing: {booking.departureDate}</span>
                                                        <span className="mx-4">|</span>
                                                        <span><i className="fas fa-user mr-2"></i> {booking.passengers} Passenger(s)</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-blue-600 font-bold">AED {booking.totalPrice.toLocaleString()}</span>
                                                    <div className="text-gray-600 mt-2">
                                                        Launching in: <span className="font-bold">{booking.launchCountdown}</span> days
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">No Space Journeys Found</h3>
                                        <button
                                            className="bg-blue-600 text-white px-6 py-2 rounded-md"
                                            onClick={() => navigate('browse')}
                                        >
                                            Explore Destinations
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Pre-flight Training</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-100 h-2 rounded-full">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                <div className="text-gray-700">65% Complete</div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check-circle text-green-600 mr-2"></i>
                                        <span>Medical Clearance</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check-circle text-green-600 mr-2"></i>
                                        <span>Zero-G Basics</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-spinner text-blue-600 mr-2"></i>
                                        <span>Safety Protocols</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-circle text-gray-300 mr-2"></i>
                                        <span>Equipment Familiarization</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-circle text-gray-300 mr-2"></i>
                                        <span>Space Navigation</span>
                                    </li>
                                </ul>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full">
                                    Continue Training
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Travel Tips</h3>
                            <ul className="space-y-4">
                                {travelTips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                        <i className="fas fa-lightbulb text-yellow-500 mr-2 mt-1"></i>
                                        <span className="text-gray-700">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Your Space Stats</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-gray-800">{bookings.length}</div>
                                    <div className="text-gray-600">Journeys Booked</div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-gray-800">0</div>
                                    <div className="text-gray-600">Days in Space</div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-gray-800">5,000</div>
                                    <div className="text-gray-600">Loyalty Points</div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-gray-800">0</div>
                                    <div className="text-gray-600">Orbits Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;