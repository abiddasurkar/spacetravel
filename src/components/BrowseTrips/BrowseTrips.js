import { useState } from "react";

function BrowseTrips({ navigate, setSelectedTrip }) {
    const trips = [
        {
            id: "trip1",
            name: "ISS Executive Experience",
            destination: "International Space Station",
            image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            duration: "14 days",
            departureDate: "2025-05-15",
            price: 12000000,
            description: "Experience life aboard the International Space Station with this exclusive 2-week journey. Train with astronauts, conduct scientific experiments, and witness 16 sunrises and sunsets every day from 400km above Earth.",
            availableSeats: 6,
            seatClasses: [
                { name: "Explorer", price: 12000000, features: ["Training Program", "Shared Sleeping Quarters", "Basic Food Options"] },
                { name: "Discoverer", price: 18000000, features: ["Enhanced Training", "Private Sleeping Pod", "Premium Food Menu", "Spacewalk Experience"] },
                { name: "Pioneer", price: 25000000, features: ["VIP Training", "Private Suite", "Gourmet Food Options", "Extended Spacewalk", "Scientific Mission Participation"] }
            ]
        },
        {
            id: "trip2",
            name: "Artemis Lunar Expedition",
            destination: "Lunar Base Alpha",
            image: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            duration: "21 days",
            departureDate: "2025-06-20",
            price: 45000000,
            description: "Be among the first civilians to walk on the lunar surface. This three-week journey includes orbital training, lunar landing, surface exploration, and accommodation at the pioneering Artemis base.",
            availableSeats: 4,
            seatClasses: [
                { name: "Lunar Explorer", price: 45000000, features: ["Basic Surface EVA", "Shared Lunar Habitat", "Limited Surface Range"] },
                { name: "Lunar Pioneer", price: 65000000, features: ["Extended Surface EVAs", "Private Habitat Section", "Lunar Rover Excursions"] }
            ]
        },
        {
            id: "trip3",
            name: "Orbital Hotel Luxury Stay",
            destination: "Emirates Orbital Resort",
            image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            duration: "7 days",
            departureDate: "2025-04-10",
            price: 8500000,
            description: "Experience zero gravity luxury at the world's first orbital hotel. Enjoy gourmet dining with Earth views, zero-G spa treatments, and the most exclusive accommodations off-planet.",
            availableSeats: 12,
            seatClasses: [
                { name: "Celestial", price: 8500000, features: ["Shared Suite (2 persons)", "Daily Activities", "Standard Dining"] },
                { name: "Galactic", price: 12500000, features: ["Private Suite", "Premium Activities", "A La Carte Dining", "Private Viewing Lounge"] },
                { name: "Universal", price: 18000000, features: ["Premium Suite", "Personal Concierge", "Chef's Table Experience", "Private EVA Session"] }
            ]
        }
    ];

    const [filters, setFilters] = useState({
        priceRange: [0, 70000000],
        duration: 'all',
        destination: 'all'
    });

    const filteredTrips = trips.filter(trip => {
        let matchesPrice = trip.price >= filters.priceRange[0] && trip.price <= filters.priceRange[1];
        let matchesDuration = filters.duration === 'all' ? true :
            filters.duration === 'short' ? trip.duration.includes('7') :
                filters.duration === 'medium' ? trip.duration.includes('14') :
                    trip.duration.includes('21');
        let matchesDestination = filters.destination === 'all' ? true :
            trip.destination.toLowerCase().includes(filters.destination.toLowerCase());

        return matchesPrice && matchesDuration && matchesDestination;
    });

    const selectTrip = (trip) => {
        setSelectedTrip(trip);
        navigate('trip-details');
    };

    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Available Space Journeys</h1>
                    <p className="text-gray-600">Select from our curated collection of extraordinary space experiences</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Filter Options</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Price Range (AED Millions)</label>
                                <div className="flex items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="70000000"
                                        step="1000000"
                                        value={filters.priceRange[1]}
                                        onChange={(e) => setFilters({ ...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
                                        className="w-full"
                                    />
                                    <span className="ml-4 text-gray-700">{Math.round(filters.priceRange[1] / 1000000)} M</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Duration</label>
                                <select
                                    value={filters.duration}
                                    onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    <option value="all">All Durations</option>
                                    <option value="short">1 Week</option>
                                    <option value="medium">2 Weeks</option>
                                    <option value="long">3 Weeks</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Destination</label>
                                <select
                                    value={filters.destination}
                                    onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    <option value="all">All Destinations</option>
                                    <option value="station">Space Station</option>
                                    <option value="lunar">Lunar Base</option>
                                    <option value="orbital">Orbital Hotel</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/4">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-800">Available Journeys ({filteredTrips.length})</h3>
                                <div>
                                    <select className="border border-gray-300 rounded-md p-2">
                                        <option>Sort by Price</option>
                                        <option>Sort by Date</option>
                                        <option>Sort by Duration</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTrips.map(trip => (
                                <div
                                    key={trip.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                    onClick={() => selectTrip(trip)}
                                >
                                    <div 
                                        className="h-48 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${trip.image})` }}
                                    ></div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{trip.name}</h3>
                                        <div className="text-gray-600 mb-4">
                                            <span className="block"><i className="fas fa-calendar-alt mr-2"></i> {trip.departureDate}</span>
                                            <span className="block"><i className="fas fa-clock mr-2"></i> {trip.duration}</span>
                                        </div>
                                        <p className="text-gray-700 mb-4">{trip.description.substring(0, 100)}...</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-600 font-bold">From AED {(trip.price / 1000000).toFixed(1)}M</span>
                                            <span className="text-gray-600">{trip.availableSeats} seats left</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseTrips;