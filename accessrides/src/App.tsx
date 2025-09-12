import React, { useState } from 'react';
import { Menu, X, MapPin, Car, Bike, Snowflake, ArrowLeft, Phone, Send, Camera, Mic, ChevronRight, Heart } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'order' | 'chat' | 'support'>('order');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigateTo = (page: 'order' | 'chat' | 'support') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-[360px] h-[740px] bg-black rounded-[24px] overflow-hidden shadow-2xl relative">
        
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-2 bg-black text-white text-sm">
          <span className="font-medium">15:34</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-white rounded"></div>
              <div className="w-1 h-3 bg-white rounded"></div>
              <div className="w-1 h-3 bg-white/70 rounded"></div>
              <div className="w-1 h-3 bg-white/40 rounded"></div>
            </div>
            <span className="ml-1">4G</span>
            <div className="w-6 h-3 bg-white rounded-sm ml-1"></div>
          </div>
        </div>

        {/* Side Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute inset-0 z-50">
            <div className="absolute inset-0 bg-black/70" onClick={toggleMenu}></div>
            <div className="absolute left-0 top-0 h-full w-64 bg-gray-900 shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-white text-xl font-bold">Menu</h2>
                  <button onClick={toggleMenu} className="text-white">
                    <X size={24} />
                  </button>
                </div>
                
                <nav className="space-y-4">
                  <button
                    onClick={() => navigateTo('order')}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentPage === 'order' ? 'bg-[#C1F11D] text-black' : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    Order Ride
                  </button>
                  <button
                    onClick={() => navigateTo('chat')}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentPage === 'chat' ? 'bg-[#C1F11D] text-black' : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    Driver Chat
                  </button>
                  <button
                    onClick={() => navigateTo('support')}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentPage === 'support' ? 'bg-[#C1F11D] text-black' : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    Support
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <div className="h-[calc(100%-40px)] relative">
          
          {/* Order Page */}
          {currentPage === 'order' && (
            <div className="h-full relative">
              {/* Map Background Simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
                {/* Simulated map elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-20 left-16 w-32 h-1 bg-gray-400 rotate-45"></div>
                  <div className="absolute top-32 left-32 w-24 h-1 bg-gray-400 rotate-12"></div>
                  <div className="absolute top-48 left-12 w-28 h-1 bg-gray-400 -rotate-12"></div>
                  <div className="absolute top-64 left-40 w-20 h-1 bg-gray-400 rotate-45"></div>
                </div>
              </div>

              {/* Top Controls */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Menu size={20} className="text-white" />
                </button>
              </div>

              {/* Pickup Point Pill */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <MapPin size={20} className="text-[#C1F11D]" />
                  <div className="text-white">
                    <div className="text-sm text-gray-300">Pickup point</div>
                    <div className="font-medium">Bd 11 Janvier 5</div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>

              {/* User Location Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-[#C1F11D] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Bottom Panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-3xl px-4 py-6">
                {/* Ride Options */}
                <div className="flex gap-3 mb-6 overflow-x-auto">
                  <div className="flex-shrink-0 bg-purple-600 rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Heart size={16} className="text-white" />
                      <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                    </div>
                    <div className="text-white font-medium text-xs">Access Rides</div>
                  </div>
                  <div className="flex-shrink-0 bg-blue-600 rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Car size={16} className="text-white" />
                      <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                    </div>
                    <div className="text-white font-medium">Ride</div>
                  </div>
                  <div className="flex-shrink-0 bg-gray-700 rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Bike size={16} className="text-[#C1F11D]" />
                      <span className="text-xs bg-white text-black rounded-full px-1">1</span>
                    </div>
                    <div className="text-white font-medium">Moto</div>
                  </div>
                  <div className="flex-shrink-0 bg-gray-700 rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Snowflake size={16} className="text-blue-400" />
                      <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                    </div>
                    <div className="text-white font-medium">Comfort</div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-gray-700 rounded-2xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-white text-lg">Where to & for how much?</span>
                  </div>
                  
                  {/* Destination Options */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-white">Souq El Had</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-white">Polyclinique de la CNSS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-white">Borjs Hotel Suites & SPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Driver Chat Page */}
          {currentPage === 'chat' && (
            <div className="h-full bg-black flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center gap-3 p-4 bg-gray-900">
                <button onClick={toggleMenu} className="text-white">
                  <ArrowLeft size={20} />
                </button>
                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">Noureddine</div>
                  <div className="text-gray-400 text-sm">Driver</div>
                </div>
                <button className="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-black" />
                </button>
              </div>

              {/* Chat Area (Empty) */}
              <div className="flex-1 p-4 flex flex-col justify-center items-center">
                <div className="text-gray-500 text-center">
                  <div className="text-sm mb-2">Thursday, 11 September</div>
                  <div className="bg-gray-800 rounded-full px-3 py-1 text-xs">New messages</div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-gray-900">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Camera size={16} className="text-white" />
                  </button>
                  <div className="flex-1 bg-gray-700 rounded-2xl px-4 py-3">
                    <input
                      type="text"
                      placeholder="Enter your message"
                      className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                    />
                  </div>
                  <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Mic size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Support Page */}
          {currentPage === 'support' && (
            <div className="h-full bg-black flex flex-col">
              {/* Support Header */}
              <div className="flex items-center justify-center p-4 bg-gray-900">
                <button
                  onClick={toggleMenu}
                  className="absolute left-4 text-white"
                >
                  <Menu size={20} />
                </button>
                <h1 className="text-white font-medium">Support</h1>
              </div>

              {/* Support Status */}
              <div className="p-4">
                <div className="bg-[#C1F11D] rounded-2xl p-3 mb-2">
                  <div className="text-black font-medium">I need an agent, please</div>
                </div>
                <div className="text-gray-400 text-xs mb-4">Searching for an available agent...</div>
                
                <div className="bg-gray-800 rounded-2xl p-3 mb-2 text-center">
                  <div className="text-gray-400 text-xs">Agent joined</div>
                </div>
              </div>

              {/* Chat Area (Empty) */}
              <div className="flex-1 p-4 flex flex-col justify-center items-center">
                <div className="text-gray-500 text-center">
                  <div className="text-sm">Chat with support agent</div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-gray-900">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Camera size={16} className="text-white" />
                  </button>
                  <div className="flex-1 bg-gray-700 rounded-2xl px-4 py-3">
                    <input
                      type="text"
                      placeholder="Enter your message"
                      className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                    />
                  </div>
                  <button className="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center">
                    <Send size={16} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
}

export default App;