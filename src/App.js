import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import BrowseTrips from './components/BrowseTrips/BrowseTrips';
import TripDetails from './components/TripDetails/TripDetails';
import Dashboard from './components/Dashboard/Dashbaord';
import Accommodations from './components/Accomodations/Accommodations';

function App() {
    const [currentView, setCurrentView] = useState('home');
    const [user, setUser] = useState(null);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [bookings, setBookings] = useState([]);

    // Simulate user login
    const loginUser = () => {
        setUser({
            id: 'user123',
            name: 'Alex Stargazer',
            email: 'alex@stargazer.com',
            avatar: '/api/placeholder/150/150',
            membershipLevel: 'Platinum Voyager'
        });
        setCurrentView('dashboard');
    };

    // Navigation function
    const navigate = (view) => {
        setCurrentView(view);
    };

    // Add booking function
    const addBooking = (booking) => {
        setBookings([...bookings, booking]);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header user={user} navigate={navigate} />

            {currentView === 'home' && !user && <LandingPage navigate={navigate} loginUser={loginUser} />}
            {currentView === 'browse' && <BrowseTrips navigate={navigate} setSelectedTrip={setSelectedTrip} />}
            {currentView === 'trip-details' && selectedTrip &&
                <TripDetails
                    trip={selectedTrip}
                    navigate={navigate}
                    addBooking={addBooking}
                />
            }
            {currentView === 'dashboard' && user &&
                <Dashboard
                    user={user}
                    bookings={bookings}
                    navigate={navigate}
                />
            }
            {currentView === 'accommodations' && <Accommodations navigate={navigate} />}

            <Footer />
        </div>
    );
}

export default App;