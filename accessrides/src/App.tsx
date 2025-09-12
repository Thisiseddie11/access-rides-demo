import React, { useState } from 'react';
import { Menu, X, MapPin, Car, Bike, Snowflake, ArrowLeft, Phone, Send, Camera, Mic, ChevronRight, Heart, Search, ThumbsUp, ThumbsDown, Paperclip } from 'lucide-react';

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
            <div className="w-6 h-3 bg-white rounded-sm ml-1">
              <div className="w-4 h-2 bg-white rounded-sm ml-0.5 mt-0.5"></div>
            </div>
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
            <div className="h-full relative bg-black">
              {/* Map Background Simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                {/* Simulated map elements */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-20 left-16 w-32 h-1 bg-gray-400 rotate-45"></div>
                  <div className="absolute top-32 left-32 w-24 h-1 bg-gray-400 rotate-12"></div>
                  <div className="absolute top-48 left-12 w-28 h-1 bg-gray-400 -rotate-12"></div>
                  <div className="absolute top-64 left-40 w-20 h-1 bg-gray-400 rotate-45"></div>
                  <div className="absolute top-80 left-20 w-36 h-1 bg-gray-400 rotate-30"></div>
                  <div className="absolute top-100 left-8 w-24 h-1 bg-gray-400 -rotate-30"></div>
                </div>
                
                {/* Map text labels */}
                <div className="absolute top-16 left-8 text-white text-xs opacity-60">Tam</div>
                <div className="absolute top-24 left-24 text-white text-xs opacity-60">حمزة بن عبد المطلب</div>
                <div className="absolute top-40 left-12 text-white text-xs opacity-60">AGADIR DESERT AVENTURE</div>
                <div className="absolute top-56 left-28 text-white text-xs opacity-60">Snack 3P</div>
                <div className="absolute top-72 left-16 text-white text-xs opacity-60">Bloc E2</div>
                <div className="absolute top-88 left-32 text-white text-xs opacity-60">Rue Al</div>
                <div className="absolute top-104 left-20 text-white text-xs opacity-60">Bd 11 Janvier</div>
                <div className="absolute top-120 left-12 text-white text-xs opacity-60">Snack Bab Dakhla</div>
                <div className="absolute top-136 left-28 text-white text-xs opacity-60">Hammam Ajdig</div>
                <div className="absolute top-152 left-16 text-white text-xs opacity-60">Moul Ta</div>
                <div className="absolute top-168 left-24 text-white text-xs opacity-60">مركز النسخ المعرفة</div>
                
                {/* Google logo */}
                <div className="absolute bottom-4 left-4 text-white text-xs opacity-60">Google</div>
              </div>

              {/* Top Controls */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Menu size={20} className="text-white" />
                </button>
                <button className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </button>
              </div>

              {/* Pickup Point Bubble */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-black/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 min-w-[200px]">
                  <div className="text-white">
                    <div className="text-xs text-gray-400">Pickup point</div>
                    <div className="font-medium text-sm">Bd 11 Janvier 5</div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 ml-auto" />
                </div>
              </div>

              {/* Current Location Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>

              {/* Map markers */}
              <div className="absolute top-20 left-20 w-3 h-3 bg-gray-600 rounded-full border border-white"></div>
              <div className="absolute top-40 left-40 w-3 h-3 bg-gray-600 rounded-full border border-white"></div>
              <div className="absolute top-60 left-60 w-3 h-3 bg-gray-600 rounded-full border border-white"></div>
              <div className="absolute top-80 left-30 w-3 h-3 bg-gray-600 rounded-full border border-white"></div>
              <div className="absolute top-100 left-50 w-3 h-3 bg-gray-600 rounded-full border border-white"></div>
              
              {/* Car marker */}
              <div className="absolute top-120 left-80 w-6 h-6 bg-gray-500 rounded flex items-center justify-center">
                <Car size={12} className="text-white" />
              </div>

              {/* Bottom Sheet */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-3xl">
                {/* Drag handle */}
                <div className="w-32 h-1 bg-white rounded-full mx-auto mt-2 mb-4"></div>
                
                <div className="px-4 pb-6">
                  {/* Ride Options */}
                  <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                    <div className="flex-shrink-0 bg-gray-700 rounded-2xl px-4 py-3 min-w-[100px]">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1">
                          <Car size={16} className="text-white" />
                          <Heart size={12} className="text-white" />
                        </div>
                        <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                      </div>
                      <div className="text-white font-medium text-sm">Access Rides</div>
                    </div>
                    <div className="flex-shrink-0 bg-gray-700 rounded-2xl px-4 py-3 min-w-[100px]">
                      <div className="flex items-center gap-2 mb-1">
                        <Car size={16} className="text-white" />
                        <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                      </div>
                      <div className="text-white font-medium text-sm">Ride</div>
                    </div>
                    <div className="flex-shrink-0 bg-gray-700 rounded-2xl px-4 py-3 min-w-[100px]">
                      <div className="flex items-center gap-2 mb-1">
                        <Bike size={16} className="text-green-500" />
                        <span className="text-xs bg-white text-black rounded-full px-1">1</span>
                      </div>
                      <div className="text-white font-medium text-sm">Moto</div>
                    </div>
                    <div className="flex-shrink-0 bg-gray-700 rounded-2xl px-4 py-3 min-w-[100px]">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1">
                          <Car size={16} className="text-gray-400" />
                          <Snowflake size={12} className="text-blue-400" />
                        </div>
                        <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                      </div>
                      <div className="text-white font-medium text-sm">Comfort</div>
                    </div>
                    <div className="flex-shrink-0 bg-gray-700 rounded-2xl px-4 py-3 min-w-[100px]">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                          <Car size={12} className="text-white" />
                        </div>
                        <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                      </div>
                      <div className="text-white font-medium text-sm">inDrive Ta...</div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400 flex-shrink-0 self-center" />
                  </div>

                  {/* Search Bar */}
                  <div className="bg-gray-700 rounded-2xl p-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Search size={20} className="text-white" />
                      <span className="text-white text-sm">Where to & for how much?</span>
                    </div>
                  </div>
                  
                  {/* Destination Options */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-white" />
                      <span className="text-white text-sm">Souq El Had</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-white" />
                      <span className="text-white text-sm">Polyclinique de la CNSS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-white" />
                      <span className="text-white text-sm">Borjs Hotel Suites & SPA</span>
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
                <button onClick={() => setCurrentPage('order')} className="text-white">
                  <ArrowLeft size={20} />
                </button>
                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold">Noureddine</div>
                  <div className="text-gray-400 text-sm">Driver</div>
                </div>
                <button className="relative">
                  <Phone size={20} className="text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 bg-black overflow-y-auto">
                {/* Date Separator */}
                <div className="text-center mb-6">
                  <div className="text-gray-400 text-sm mb-2">Thursday, 11 September</div>
                  <div className="flex items-center justify-center">
                    <div className="flex-1 h-px bg-gray-600"></div>
                    <div className="mx-4 px-3 py-1 bg-gray-800 rounded-full border border-gray-600">
                      <span className="text-gray-400 text-xs">New messages</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-600"></div>
                  </div>
                </div>

                {/* Incoming Message */}
                <div className="mb-4">
                  <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3 max-w-[280px]">
                    <div className="text-white text-sm mb-1">
                      I'm on my way. Is your pickup address correct? [Automessage]
                    </div>
                    <div className="text-gray-400 text-xs text-right">17:36</div>
                  </div>
                </div>

                {/* Outgoing Message */}
                <div className="mb-4 flex justify-end">
                  <div className="bg-green-500 rounded-2xl rounded-br-md px-4 py-3 max-w-[280px]">
                    <div className="text-white text-sm mb-1">Hello</div>
                    <div className="flex items-center justify-end gap-1">
                      <div className="text-gray-300 text-xs">17:36</div>
                      <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Reply Options */}
                <div className="space-y-2 mb-4">
                  <div className="bg-transparent border border-yellow-400 rounded-2xl px-4 py-3 max-w-[200px]">
                    <div className="text-white text-sm">I'm here</div>
                  </div>
                  <div className="bg-transparent border border-yellow-400 rounded-2xl px-4 py-3 max-w-[200px]">
                    <div className="text-white text-sm">Where are you?</div>
                  </div>
                  <div className="bg-transparent border border-yellow-400 rounded-2xl px-4 py-3 max-w-[200px]">
                    <div className="text-white text-sm">Please, give me 5 minutes</div>
                  </div>
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
              <div className="flex items-center justify-center p-4 bg-gray-900 relative">
                <button
                  onClick={() => setCurrentPage('order')}
                  className="absolute left-4 text-white"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h1 className="text-white font-bold">Support</h1>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 bg-black overflow-y-auto">
                {/* User Messages */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-end">
                    <div className="bg-green-500 rounded-2xl rounded-br-md px-4 py-3 max-w-[280px]">
                      <div className="text-white text-sm mb-1">I need an agent please</div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="text-gray-300 text-xs">09:07</div>
                        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-green-500 rounded-2xl rounded-br-md px-4 py-3 max-w-[280px]">
                      <div className="text-white text-sm mb-1">Hi</div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="text-gray-300 text-xs">09:09</div>
                        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-green-500 rounded-2xl rounded-br-md px-4 py-3 max-w-[280px]">
                      <div className="text-white text-sm mb-1">Test</div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="text-gray-300 text-xs">09:11</div>
                        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-green-500 rounded-2xl rounded-br-md px-4 py-3 max-w-[280px]">
                      <div className="text-white text-sm mb-1">Salam Nourah Please transfer this chat to our new colleague Eya</div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="text-gray-300 text-xs">09:12</div>
                        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Messages */}
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm">Searching for an available agent...</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-gray-400 text-sm">Agent joined</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-gray-400 text-sm">Request resolved</div>
                  </div>
                </div>

                {/* Agent Messages */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-start">
                    <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3 max-w-[280px]">
                      <div className="text-white text-sm mb-1">ok</div>
                      <div className="text-gray-400 text-xs text-right">09:14</div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3 max-w-[280px]">
                      <div className="text-white text-sm mb-1">
                        We're waiting for your reply! Please respond within a few minutes to keep your request open, and we'll continue assisting you
                      </div>
                      <div className="text-gray-400 text-xs text-right">09:19</div>
                    </div>
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="text-center mb-8">
                  <div className="text-white font-bold text-lg mb-6">Did we solve the problem?</div>
                  <div className="flex justify-center gap-4">
                    <button className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                      <ThumbsUp size={24} className="text-white" />
                    </button>
                    <button className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                      <ThumbsDown size={24} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-gray-900">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Paperclip size={16} className="text-gray-400" />
                  </button>
                  <div className="flex-1 bg-gray-800 rounded-2xl px-4 py-3">
                    <input
                      type="text"
                      placeholder="Enter your message"
                      className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                    />
                  </div>
                  <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <Send size={16} className="text-white" />
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