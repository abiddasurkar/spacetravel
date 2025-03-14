import { useState } from "react";

function Accommodations({ navigate }) {
    const accommodations = [
        {
            id: "acc1",
            name: "ISS Horizon Suite",
            location: "International Space Station",
            image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            pricePerNight: 1500000,
            rating: 4.9,
            amenities: ["360° Earth Views", "Zero-G Sleeping Quarters", "Space-Friendly Facilities", "Gourmet Space Food"],
            description: "Experience luxury aboard the International Space Station with our exclusive Horizon Suite. Wake up to 16 sunrises per day and enjoy unparalleled views of Earth from 400km above.",
        },
        {
            id: "acc2",
            name: "Lunar Dome Premium",
            location: "Artemis Base, Moon",
            image: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            pricePerNight: 3500000,
            rating: 4.8,
            amenities: ["Lunar Surface Views", "Regolith-Shielded Comfort", "Private Lunar EVA", "Earth-Viewing Lounge"],
            description: "Stay in our premium pressurized dome on the lunar surface. Experience 1/6th gravity in luxurious comfort while enjoying the desolate beauty of the Moon's landscape.",
        },
        {
            id: "acc3",
            name: "Orbital Grand Hotel",
            location: "Low Earth Orbit",
            image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            pricePerNight: 950000,
            rating: 4.7,
            amenities: ["Rotating Artificial Gravity", "Space Spa", "Observation Deck", "Infinity Pool"],
            description: "The world's first true space hotel with artificial gravity in the living quarters. Enjoy Earth views from our zero-G observation deck and relax in our revolutionary space spa.",
        },
        {
            id: "acc4",
            name: "Mars Transit Habitat",
            location: "Mars Transit Vehicle",
            image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            pricePerNight: 4200000,
            rating: 4.6,
            amenities: ["Extended Journey", "Science Lab Access", "VR Entertainment", "Deep Space Views"],
            description: "Experience what a Mars journey would feel like in our Mars Transit Habitat simulation. This extended stay package includes scientific activities and stunning views of deep space.",
        }
    ];

    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Space Accommodations</h1>
                    <p className="text-gray-600">Experience luxury beyond Earth with our exclusive space lodging options</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {accommodations.map(accommodation => (
                        <div key={accommodation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div 
                                className="h-48 bg-cover bg-center" 
                                style={{ backgroundImage: `url(${accommodation.image})` }}
                            ></div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{accommodation.name}</h3>
                                    <div className="flex items-center">
                                        <i className="fas fa-star text-yellow-500 mr-1"></i>
                                        <span className="text-gray-800">{accommodation.rating}</span>
                                    </div>
                                </div>
                                <div className="text-gray-600 mb-4">
                                    <i className="fas fa-map-marker-alt mr-2"></i> {accommodation.location}
                                </div>
                                <p className="text-gray-700 mb-4">{accommodation.description}</p>
                                <div className="mb-4">
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">Amenities</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {accommodation.amenities.map((amenity, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-blue-600 font-bold">AED {(accommodation.pricePerNight / 1000000).toFixed(1)}M</span>
                                        <span className="text-gray-600 block">per night</span>
                                    </div>
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                        onClick={() => navigate('trip-details')}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accommodations;