import { useState } from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-xl font-bold">Dubai<span className="text-blue-600">Space</span></span>
                            <span className="text-xl ml-2">🚀</span>
                        </div>
                        <p className="text-gray-400">Pioneering the future of commercial space travel from Dubai to the stars.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-blue-600">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Destinations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Safety Protocols</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Training Programs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Waivers & Agreements</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-600">Insurance Information</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400"><i className="fas fa-map-marker-alt mr-2"></i> Dubai Spaceport, UAE</li>
                            <li className="text-gray-400"><i className="fas fa-phone mr-2"></i> +971 800 SPACE</li>
                            <li className="text-gray-400"><i className="fas fa-envelope mr-2"></i> info@dubaispace.ae</li>
                        </ul>
                        <div className="mt-4">
                            <h4 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h4>
                            <div className="flex">
                                <input type="email" placeholder="Enter your email" className="flex-1 p-2 rounded-l-md" />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2025 DubaiSpace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;