import React, { useState, useEffect } from 'react';
import './App.css';

// Main App Component
function SpaceTravelApp() {
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

  return (
    <div className="space-app">
      <Header user={user} navigate={navigate} />
      
      {currentView === 'home' && !user && <LandingPage navigate={navigate} loginUser={loginUser} />}
      {currentView === 'browse' && <BrowseTrips navigate={navigate} setSelectedTrip={setSelectedTrip} />}
      {currentView === 'trip-details' && selectedTrip && 
        <TripDetails 
          trip={selectedTrip} 
          navigate={navigate} 
          addBooking={(booking) => setBookings([...bookings, booking])}
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

// Header Component
function Header({ user, navigate }) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('home')}>
          <span className="logo-text">Dubai<span className="highlight">Space</span></span>
          <span className="logo-icon">🚀</span>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li onClick={() => navigate('browse')}>Destinations</li>
            <li onClick={() => navigate('accommodations')}>Space Hotels</li>
            <li>Experiences</li>
            <li>About Us</li>
          </ul>
        </nav>
        
        <div className="user-controls">
          {user ? (
            <div className="user-profile" onClick={() => navigate('dashboard')}>
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <span className="user-name">{user.name}</span>
            </div>
          ) : (
            <button className="login-button" onClick={() => navigate('login')}>Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
}

// Landing Page Component
function LandingPage({ navigate, loginUser }) {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Dubai to the Stars</h1>
          <h2>The Ultimate Space Travel Experience</h2>
          <p>Embark on an extraordinary journey beyond Earth's atmosphere. Experience zero gravity, witness breathtaking cosmic vistas, and make history as a pioneer of commercial space travel.</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => navigate('browse')}>
              Book Your Journey
            </button>
            <button className="secondary-button" onClick={loginUser}>
              Try Demo
            </button>
          </div>
        </div>
        <div className="search-container">
          <div className="search-box">
            <h3>Find Your Space Adventure</h3>
            <div className="search-form">
              <div className="form-group">
                <label>Departure From</label>
                <select defaultValue="dubai">
                  <option value="dubai">Dubai Spaceport</option>
                  <option value="abudhabi">Abu Dhabi Launch Complex</option>
                </select>
              </div>
              <div className="form-group">
                <label>Destination</label>
                <select defaultValue="iss">
                  <option value="iss">International Space Station</option>
                  <option value="lunar">Artemis Lunar Base</option>
                  <option value="orbital">Orbital Hotel</option>
                  <option value="mars">Mars Transit Experience</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label>Departure Date</label>
                  <input type="date" min="2025-03-15" />
                </div>
                <div className="form-group half">
                  <label>Travelers</label>
                  <select defaultValue="1">
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                  </select>
                </div>
              </div>
              <button className="search-button" onClick={() => navigate('browse')}>
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Travel to Space with Dubai<span className="highlight">Space</span>?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Safety First</h3>
            <p>Industry-leading safety protocols with 100% mission success rate.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Luxury Experience</h3>
            <p>Premium accommodations and five-star service even in zero gravity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Pioneer Program</h3>
            <p>Be among the first civilian space travelers in human history.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Sustainable Space Travel</h3>
            <p>Carbon-neutral launches and eco-conscious space tourism.</p>
          </div>
        </div>
      </div>

      <div className="destinations-preview">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card" onClick={() => navigate('browse')}>
            <div className="destination-image iss"></div>
            <h3>International Space Station</h3>
            <p>2-week orbital experience</p>
            <span className="price">From AED 12,000,000</span>
          </div>
          <div className="destination-card" onClick={() => navigate('browse')}>
            <div className="destination-image lunar"></div>
            <h3>Artemis Lunar Base</h3>
            <p>Lunar surface expedition</p>
            <span className="price">From AED 45,000,000</span>
          </div>
          <div className="destination-card" onClick={() => navigate('browse')}>
            <div className="destination-image orbital"></div>
            <h3>Orbital Hotel</h3>
            <p>Luxury in zero gravity</p>
            <span className="price">From AED 8,500,000</span>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>Voyager Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"The moment Earth appeared as a pale blue dot from my orbital suite window - that changed everything. Worth every dirham."</p>
            </div>
            <div className="testimonial-author">
              <img src="/api/placeholder/50/50" alt="Mohammed A." />
              <div>
                <h4>Mohammed A.</h4>
                <p>ISS Executive Tour</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"DubaiSpace's attention to detail made my lunar expedition absolutely seamless. The training program prepared me perfectly."</p>
            </div>
            <div className="testimonial-author">
              <img src="/api/placeholder/50/50" alt="Sarah K." />
              <div>
                <h4>Sarah K.</h4>
                <p>Lunar Surface Explorer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Browse Trips Component
function BrowseTrips({ navigate, setSelectedTrip }) {
  const trips = [
    {
      id: "trip1",
      name: "ISS Executive Experience",
      destination: "International Space Station",
      image: "iss",
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
      image: "lunar",
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
      image: "orbital",
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
    <div className="browse-trips-page">
      <div className="browse-hero">
        <h1>Available Space Journeys</h1>
        <p>Select from our curated collection of extraordinary space experiences</p>
      </div>
      
      <div className="browse-container">
        <div className="filters-panel">
          <h3>Filter Options</h3>
          <div className="filter-group">
            <label>Price Range (AED Millions)</label>
            <div className="range-slider">
              <input 
                type="range" 
                min="0" 
                max="70000000" 
                step="1000000"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)]})}
              />
              <span>{Math.round(filters.priceRange[1]/1000000)} M</span>
            </div>
          </div>
          
          <div className="filter-group">
            <label>Duration</label>
            <select 
              value={filters.duration}
              onChange={(e) => setFilters({...filters, duration: e.target.value})}
            >
              <option value="all">All Durations</option>
              <option value="short">1 Week</option>
              <option value="medium">2 Weeks</option>
              <option value="long">3 Weeks</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Destination</label>
            <select
              value={filters.destination}
              onChange={(e) => setFilters({...filters, destination: e.target.value})}
            >
              <option value="all">All Destinations</option>
              <option value="station">Space Station</option>
              <option value="lunar">Lunar Base</option>
              <option value="orbital">Orbital Hotel</option>
            </select>
          </div>
        </div>
      
        <div className="trips-results">
          <div className="results-header">
            <h3>Available Journeys ({filteredTrips.length})</h3>
            <div className="sort-options">
              <select>
                <option>Sort by Price</option>
                <option>Sort by Date</option>
                <option>Sort by Duration</option>
              </select>
            </div>
          </div>
          
          <div className="trips-grid">
            {filteredTrips.map(trip => (
              <div key={trip.id} className="trip-card" onClick={() => selectTrip(trip)}>
                <div className={`trip-image ${trip.image}`}></div>
                <div className="trip-info">
                  <h3>{trip.name}</h3>
                  <div className="trip-meta">
                    <span><i className="icon-calendar"></i> {trip.departureDate}</span>
                    <span><i className="icon-clock"></i> {trip.duration}</span>
                  </div>
                  <p className="trip-description">{trip.description.substring(0, 100)}...</p>
                  <div className="trip-footer">
                    <span className="trip-price">From AED {(trip.price/1000000).toFixed(1)}M</span>
                    <span className="seats-left">{trip.availableSeats} seats left</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Trip Details Component
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
    <div className="trip-details-page">
      <div className={`trip-details-hero ${trip.image}`}>
        <div className="trip-details-overlay">
          <h1>{trip.name}</h1>
          <div className="trip-details-meta">
            <span><i className="icon-location"></i> {trip.destination}</span>
            <span><i className="icon-calendar"></i> Departure: {trip.departureDate}</span>
            <span><i className="icon-clock"></i> Duration: {trip.duration}</span>
          </div>
        </div>
      </div>
      
      <div className="booking-container">
        <div className="booking-sidebar">
          <div className="booking-progress">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Select Class</div>
            </div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Add-ons</div>
            </div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Review</div>
            </div>
          </div>
          
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-detail">
              <span>Class:</span>
              <span>{selectedClass.name}</span>
            </div>
            <div className="summary-detail">
              <span>Passengers:</span>
              <span>{passengers}</span>
            </div>
            <div className="summary-detail">
              <span>Base Price:</span>
              <span>AED {(selectedClass.price * passengers).toLocaleString()}</span>
            </div>
            {selectedAddons.length > 0 && (
              <>
                <div className="summary-detail">
                  <span>Add-ons:</span>
                  <span>AED {selectedAddons.reduce((total, addon) => total + addon.price, 0).toLocaleString()}</span>
                </div>
              </>
            )}
            <div className="summary-total">
              <span>Total:</span>
              <span>AED {calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="booking-main">
          {currentStep === 1 && (
            <div className="booking-step class-selection">
              <h2>Select Your Travel Class</h2>
              <p>Choose the experience that suits your space adventure dreams</p>
              
              <div className="class-options">
                {trip.seatClasses.map((seatClass) => (
                  <div 
                    key={seatClass.name}
                    className={`class-option ${selectedClass.name === seatClass.name ? 'selected' : ''}`}
                    onClick={() => setSelectedClass(seatClass)}
                  >
                    <div className="class-header">
                      <h3>{seatClass.name}</h3>
                      <span className="class-price">AED {(seatClass.price/1000000).toFixed(1)}M</span>
                    </div>
                    <div className="class-features">
                      {seatClass.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <span className="feature-icon">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="passenger-selector">
                      <label>Passengers:</label>
                      <div className="passenger-controls">
                        <button 
                          className="passenger-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (passengers > 1) setPassengers(passengers - 1);
                          }}
                        >-</button>
                        <span>{passengers}</span>
                        <button 
                          className="passenger-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (passengers < trip.availableSeats) setPassengers(passengers + 1);
                          }}
                        >+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="booking-actions">
                <button className="secondary-button" onClick={() => navigate('browse')}>Back to Results</button>
                <button className="primary-button" onClick={nextStep}>Continue to Add-ons</button>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="booking-step addons-selection">
              <h2>Customize Your Space Journey</h2>
              <p>Enhance your experience with these specially curated options</p>
              
              <div className="addons-grid">
                {addons.map(addon => (
                  <div 
                    key={addon.id}
                    className={`addon-card ${selectedAddons.find(a => a.id === addon.id) ? 'selected' : ''}`}
                    onClick={() => toggleAddon(addon)}
                  >
                    <div className="addon-content">
                      <h3>{addon.name}</h3>
                      <p>{addon.description}</p>
                    </div>
                    <div className="addon-footer">
                      <span className="addon-price">AED {(addon.price).toLocaleString()}</span>
                      <span className={`addon-status ${selectedAddons.find(a => a.id === addon.id) ? 'selected' : ''}`}>
                        {selectedAddons.find(a => a.id === addon.id) ? 'Selected' : 'Add'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="booking-actions">
                <button className="secondary-button" onClick={prevStep}>Back to Class Selection</button>
                <button className="primary-button" onClick={nextStep}>Review Booking</button>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="booking-step booking-review">
              <h2>Review Your Space Journey</h2>
              <p>Please confirm the details of your booking before proceeding</p>
              
              <div className="review-details">
                <div className="review-section">
                  <h3>Journey Details</h3>
                  <div className="review-item">
                    <span>Experience:</span>
                    <span>{trip.name}</span>
                  </div>
                  <div className="review-item">
                    <span>Destination:</span>
                    <span>{trip.destination}</span>
                  </div>
                  <div className="review-item">
                    <span>Departure:</span>
                    <span>{trip.departureDate}</span>
                  </div>
                  <div className="review-item">
                    <span>Duration:</span>
                    <span>{trip.duration}</span>
                  </div>
                </div>
                
                <div className="review-section">
                  <h3>Booking Details</h3>
                  <div className="review-item">
                    <span>Travel Class:</span>
                    <span>{selectedClass.name}</span>
                  </div>
                  <div className="review-item">
                    <span>Passengers:</span>
                    <span>{passengers}</span>
                  </div>
                  <div className="review-item">
                    <span>Selected Add-ons:</span>
                    <span>{selectedAddons.length ? selectedAddons.map(a => a.name).join(', ') : 'None'}</span>
                  </div>
                </div>
                
                <div className="review-section total-section">
                  <div className="review-item total">
                    <span>Total Amount:</span>
                    <span>AED {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="terms-agreement">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I acknowledge the risks associated with space travel and agree to the terms and conditions</label>
              </div>
              
              <div className="booking-actions">
                <button className="secondary-button" onClick={prevStep}>Back to Add-ons</button>
                <button className="primary-button" onClick={completeBooking}>Complete Booking</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Dashboard Component
function Dashboard({ user, bookings, navigate }) {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Filter bookings based on active tab
  const filteredBookings = activeTab === 'upcoming' 
    ? bookings.filter(b => new Date(b.departureDate) > new Date()) 
    : bookings;
  
  // Travel tips based on AI recommendations
  const travelTips = [
    "Prepare for your journey with our zero-G adaptation exercises starting 3 weeks before departure.",
    "Pack light - remember everything weighs differently in space!",
    "Stay hydrated before, during and after your space journey.",
    "Bring a small personal item to leave at the ISS visitor's collection.",
    "The best views of Earth are often from the observation deck during orbit sunrise."
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="user-welcome">
          <div className="user-info">
            <img src={user.avatar} alt={user.name} className="dashboard-avatar" />
            <div>
              <h1>Welcome back, {user.name}</h1>
              <span className="membership-badge">{user.membershipLevel}</span>
            </div>
          </div>
          <div className="quick-actions">
            <button className="action-button" onClick={() => navigate('browse')}>
              Book New Journey
            </button>
          </div>
        </div>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-main">
          <div className="bookings-panel">
            <div className="panel-header">
              <h2>Your Space Journeys</h2>
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming
                </button>
                <button 
                  className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  All Bookings
                </button>
              </div>
            </div>
            
            <div className="bookings-list">
              {filteredBookings.length > 0 ? (
                filteredBookings.map(booking => (
                  <div key={booking.id} className="booking-card">
                    <div className="booking-status">
                      <span className={`status-badge ${booking.status.toLowerCase()}`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="booking-details">
                      <h3>{booking.tripName}</h3>
                      <div className="booking-meta">
                        <span><i className="icon-location"></i> {booking.destination}</span>
                        <span><i className="icon-calendar"></i> Departing: {booking.departureDate}</span>
                        <span><i className="icon-user"></i> {booking.passengers} Passenger(s)</span>
                      </div>
                    </div>
                    <div className="booking-class">
                      <span className="class-label">Class:</span>
                      <span className="class-value">{booking.className}</span>
                    </div>
                    <div className="booking-countdown">
                      <div className="countdown-label">Launching in:</div>
                      <div className="countdown-timer">
                        <span className="countdown-value">{booking.launchCountdown}</span>
                        <span className="countdown-unit">Days</span>
                      </div>
                    </div>
                    <div className="booking-actions">
                      <button className="booking-action-btn">View Details</button>
                      <button className="booking-action-btn secondary">Manage</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">🚀</div>
                  <h3>No Space Journeys Found</h3>
                  <p>Start your adventure by booking your first space journey.</p>
                  <button className="primary-button" onClick={() => navigate('browse')}>
                    Explore Destinations
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="dashboard-sidebar">
          <div className="sidebar-panel training-status">
            <h3>Pre-flight Training</h3>
            {bookings.length > 0 ? (
              <div className="training-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '65%'}}></div>
                </div>
                <div className="progress-label">65% Complete</div>
                <ul className="training-list">
                  <li className="completed">Medical Clearance</li>
                  <li className="completed">Zero-G Basics</li>
                  <li className="in-progress">Safety Protocols</li>
                  <li>Equipment Familiarization</li>
                  <li>Space Navigation</li>
                </ul>
                <button className="action-button">Continue Training</button>
              </div>
            ) : (
              <div className="empty-training">
                <p>Book a journey to begin your training program.</p>
              </div>
            )}
          </div>
          
          <div className="sidebar-panel travel-tips">
            <h3>AI Travel Tips</h3>
            <ul className="tips-list">
              {travelTips.map((tip, index) => (
                <li key={index} className="tip-item">
                  <span className="tip-icon">💡</span>
                  <span className="tip-text">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-panel quick-stats">
            <h3>Your Space Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">{bookings.length}</div>
                <div className="stat-label">Journeys Booked</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">0</div>
                <div className="stat-label">Days in Space</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5,000</div>
                <div className="stat-label">Loyalty Points</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">0</div>
                <div className="stat-label">Orbits Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Accommodations Component
function Accommodations({ navigate }) {
  const accommodations = [
    {
      id: "acc1",
      name: "ISS Horizon Suite",
      location: "International Space Station",
      image: "iss-accommodation",
      pricePerNight: 1500000,
      rating: 4.9,
      amenities: ["360° Earth Views", "Zero-G Sleeping Quarters", "Space-Friendly Facilities", "Gourmet Space Food"],
      description: "Experience luxury aboard the International Space Station with our exclusive Horizon Suite. Wake up to 16 sunrises per day and enjoy unparalleled views of Earth from 400km above.",
    },
    {
      id: "acc2",
      name: "Lunar Dome Premium",
      location: "Artemis Base, Moon",
      image: "lunar-accommodation",
      pricePerNight: 3500000,
      rating: 4.8,
      amenities: ["Lunar Surface Views", "Regolith-Shielded Comfort", "Private Lunar EVA", "Earth-Viewing Lounge"],
      description: "Stay in our premium pressurized dome on the lunar surface. Experience 1/6th gravity in luxurious comfort while enjoying the desolate beauty of the Moon's landscape.",
    },
    {
      id: "acc3",
      name: "Orbital Grand Hotel",
      location: "Low Earth Orbit",
      image: "orbital-accommodation",
      pricePerNight: 950000,
      rating: 4.7,
      amenities: ["Rotating Artificial Gravity", "Space Spa", "Observation Deck", "Infinity Pool"],
      description: "The world's first true space hotel with artificial gravity in the living quarters. Enjoy Earth views from our zero-G observation deck and relax in our revolutionary space spa.",
    },
    {
      id: "acc4",
      name: "Mars Transit Habitat",
      location: "Mars Transit Vehicle",
      image: "mars-accommodation",
      pricePerNight: 4200000,
      rating: 4.6,
      amenities: ["Extended Journey", "Science Lab Access", "VR Entertainment", "Deep Space Views"],
      description: "Experience what a Mars journey would feel like in our Mars Transit Habitat simulation. This extended stay package includes scientific activities and stunning views of deep space.",
    }
  ];

  return (
    <div className="accommodations-page">
      <div className="accommodations-hero">
        <h1>Space Accommodations</h1>
        <p>Experience luxury beyond Earth with our exclusive space lodging options</p>
      </div>
      
      <div className="accommodations-filters">
        <div className="filter-group">
          <label>Destination</label>
          <select>
            <option>All Destinations</option>
            <option>Earth Orbit</option>
            <option>Lunar Surface</option>
            <option>Deep Space</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Duration</label>
          <select>
            <option>Any Duration</option>
            <option>Short Stay (1-3 days)</option>
            <option>Medium Stay (4-7 days)</option>
            <option>Extended Stay (8+ days)</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Price Range</label>
          <select>
            <option>All Prices</option>
            <option>Premium (&lt;1M AED/night)</option>
            <option>Luxury (1-3M AED/night)</option>
            <option>Ultra-Luxury (3M+ AED/night)</option>
          </select>
        </div>
        <button className="filter-apply-btn">Apply Filters</button>
      </div>
      
      <div className="accommodations-grid">
        {accommodations.map(accommodation => (
          <div key={accommodation.id} className="accommodation-card">
            <div className={`accommodation-image ${accommodation.image}`}></div>
            <div className="accommodation-content">
              <div className="accommodation-header">
                <h3>{accommodation.name}</h3>
                <div className="accommodation-rating">
                  <span className="rating-star">★</span>
                  <span>{accommodation.rating}</span>
                </div>
              </div>
              <div className="accommodation-location">
                <i className="icon-location"></i> {accommodation.location}
              </div>
              <p className="accommodation-description">{accommodation.description}</p>
              <div className="accommodation-amenities">
                <h4>Amenities</h4>
                <div className="amenities-list">
                  {accommodation.amenities.map((amenity, index) => (
                    <span key={index} className="amenity-tag">{amenity}</span>
                  ))}
                </div>
              </div>
              <div className="accommodation-footer">
                <div className="accommodation-price">
                  <span className="price-value">AED {(accommodation.pricePerNight/1000000).toFixed(1)}M</span>
                  <span className="price-label">per night</span>
                </div>
                <button className="book-now-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">Dubai<span className="highlight">Space</span></span>
            <span className="logo-icon">🚀</span>
          </div>
          <p>Pioneering the future of commercial space travel from Dubai to the stars.</p>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Safety Protocols</a></li>
            <li><a href="#">Training Programs</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Waivers & Agreements</a></li>
            <li><a href="#">Insurance Information</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><i className="icon-location"></i> Dubai Spaceport, UAE</li>
            <li><i className="icon-phone"></i> +971 800 SPACE</li>
            <li><i className="icon-email"></i> info@dubaispace.ae</li>
          </ul>
          <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 DubaiSpace. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default SpaceTravelApp;