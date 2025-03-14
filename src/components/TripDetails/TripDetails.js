import { useState } from "react";

function TripDetails({ trip, navigate, addBooking }) {
    const [selectedClass, setSelectedClass] = useState(trip.seatClasses[0]);
    const [passengers, setPassengers] = useState(1);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedAddons, setSelectedAddons] = useState([]);

    const addons = [
        { id: 'addon1', name: 'Space Photography Package', price: 150000, description: 'Professional camera equipment rental and training to capture your journey' },
        { id: 'addon2', name: 'Family Communication Package', price: 100000, description: 'Daily private video calls with loved ones on Earth' },
        { id: 'addon3', name: 'Scientific Participation', price: 300000, description: 'Join researchers in conducting real space experiments' },
        { id: 'addon4', name: 'Space Memorabilia Collection', price: 200000, description: 'Collect certified items that have been to space with you' }
    ];

    const toggleAddon = (addon) => {
        if (selectedAddons.find(a => a.id === addon.id)) {
            setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
        } else {
            setSelectedAddons([...selectedAddons, addon]);
        }
    };

    const calculateTotal = () => {
        const classTotal = selectedClass.price * passengers;
        const addonsTotal = selectedAddons.reduce((total, addon) => total + addon.price, 0);
        return classTotal + addonsTotal;
    };

    const completeBooking = () => {
        const newBooking = {
            id: `booking-${Date.now()}`,
            tripId: trip.id,
            tripName: trip.name,
            destination: trip.destination,
            departureDate: trip.departureDate,
            className: selectedClass.name,
            passengers,
            addons: selectedAddons,
            totalPrice: calculateTotal(),
            status: 'Confirmed',
            launchCountdown: Math.floor((new Date(trip.departureDate) - new Date()) / (1000 * 60 * 60 * 24))
        };
        addBooking(newBooking);
        navigate('dashboard');
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className={`bg-${trip.image} bg-cover bg-center h-96 rounded-lg relative`}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white">{trip.name}</h1>
                            <div className="text-gray-200 mt-2">
                                <span><i className="fas fa-map-marker-alt mr-2"></i> {trip.destination}</span>
                                <span className="mx-4">|</span>
                                <span><i className="fas fa-calendar-alt mr-2"></i> Departure: {trip.departureDate}</span>
                                <span className="mx-4">|</span>
                                <span><i className="fas fa-clock mr-2"></i> Duration: {trip.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        {/* Step 1: Class Selection */}
                        {currentStep === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Travel Class</h2>
                                <div className="space-y-4">
                                    {trip.seatClasses.map((seatClass) => (
                                        <div
                                            key={seatClass.name}
                                            className={`p-6 border rounded-lg cursor-pointer ${selectedClass.name === seatClass.name ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                                                }`}
                                            onClick={() => setSelectedClass(seatClass)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-xl font-bold text-gray-800">{seatClass.name}</h3>
                                                <span className="text-blue-600 font-bold">AED {(seatClass.price / 1000000).toFixed(1)}M</span>
                                            </div>
                                            <div className="mt-4">
                                                {seatClass.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center text-gray-700">
                                                        <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-4">
                                                <label className="text-gray-700 font-medium">Passengers:</label>
                                                <div className="flex items-center mt-2">
                                                    <button
                                                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (passengers > 1) setPassengers(passengers - 1);
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="bg-gray-100 px-4 py-1">{passengers}</span>
                                                    <button
                                                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (passengers < trip.availableSeats) setPassengers(passengers + 1);
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <button
                                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md"
                                        onClick={() => navigate('browse')}
                                    >
                                        Back to Results
                                    </button>
                                    <button
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md"
                                        onClick={nextStep}
                                    >
                                        Continue to Add-ons
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Add-ons Selection */}
                        {currentStep === 2 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Customize Your Space Journey</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {addons.map((addon) => (
                                        <div
                                            key={addon.id}
                                            className={`p-6 border rounded-lg cursor-pointer ${selectedAddons.find(a => a.id === addon.id) ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                                                }`}
                                            onClick={() => toggleAddon(addon)}
                                        >
                                            <h3 className="text-xl font-bold text-gray-800">{addon.name}</h3>
                                            <p className="text-gray-600 mt-2">{addon.description}</p>
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="text-blue-600 font-bold">AED {addon.price.toLocaleString()}</span>
                                                <span className={`text-sm font-medium ${selectedAddons.find(a => a.id === addon.id) ? 'text-blue-600' : 'text-gray-600'
                                                    }`}>
                                                    {selectedAddons.find(a => a.id === addon.id) ? 'Selected' : 'Add'}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <button
                                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md"
                                        onClick={prevStep}
                                    >
                                        Back to Class Selection
                                    </button>
                                    <button
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md"
                                        onClick={nextStep}
                                    >
                                        Review Booking
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Review Booking */}
                        {currentStep === 3 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Your Space Journey</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Journey Details</h3>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-700">Experience:</span>
                                                <span className="text-gray-800 font-medium">{trip.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-700">Destination:</span>
                                                <span className="text-gray-800 font-medium">{trip.destination}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-700">Departure:</span>
                                                <span className="text-gray-800 font-medium">{trip.departureDate}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-700">Duration:</span>
                                                <span className="text-gray-800 font-medium">{trip.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Details</h3>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-700">Travel Class:</span>
                                                <span className="text-gray-800 font-medium">{selectedClass.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-700">Passengers:</span>
                                                <span className="text-gray-800 font-medium">{passengers}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-700">Selected Add-ons:</span>
                                                <span className="text-gray-800 font-medium">
                                                    {selectedAddons.length ? selectedAddons.map(a => a.name).join(', ') : 'None'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between">
                                            <span className="text-xl font-bold text-gray-800">Total Amount:</span>
                                            <span className="text-xl font-bold text-blue-600">AED {calculateTotal().toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-700">
                                                I acknowledge the risks associated with space travel and agree to the terms and conditions.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="mt-6 flex justify-between">
                                        <button
                                            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md"
                                            onClick={prevStep}
                                        >
                                            Back to Add-ons
                                        </button>
                                        <button
                                            className="bg-blue-600 text-white px-6 py-2 rounded-md"
                                            onClick={completeBooking}
                                        >
                                            Complete Booking
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Booking Summary Sidebar */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-700">Class:</span>
                                <span className="text-gray-800 font-medium">{selectedClass.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-700">Passengers:</span>
                                <span className="text-gray-800 font-medium">{passengers}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-700">Base Price:</span>
                                <span className="text-gray-800 font-medium">AED {(selectedClass.price * passengers).toLocaleString()}</span>
                            </div>
                            {selectedAddons.length > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Add-ons:</span>
                                    <span className="text-gray-800 font-medium">
                                        AED {selectedAddons.reduce((total, addon) => total + addon.price, 0).toLocaleString()}
                                    </span>
                                </div>
                            )}
                            <div className="border-t pt-4">
                                <div className="flex justify-between">
                                    <span className="text-xl font-bold text-gray-800">Total:</span>
                                    <span className="text-xl font-bold text-blue-600">AED {calculateTotal().toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TripDetails;