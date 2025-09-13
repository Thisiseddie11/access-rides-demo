import { useState } from 'react';
import { Menu, X, MapPin, Car, Bike, Snowflake, ArrowLeft, Phone, Send, Camera, Mic, ChevronRight, Heart } from 'lucide-react';
import DeafButton from './components/DeafButton';

interface ChatMessage {
  id: string;
  text: string;
  timestamp: string;
  isUser: boolean;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'order' | 'chat' | 'support'>('order');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Message states
  const [chatMessage, setChatMessage] = useState('');
  const [supportMessage, setSupportMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "I'm on my way. Is your pickup address correct? [Automessage]",
      timestamp: '17:36',
      isUser: false
    },
    {
      id: '2',
      text: 'Hello',
      timestamp: '17:36',
      isUser: true
    }
  ]);
  const [supportMessages, setSupportMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'I need an agent please',
      timestamp: '09:07',
      isUser: true
    },
    {
      id: '2',
      text: 'Hi',
      timestamp: '09:09',
      isUser: true
    },
    {
      id: '3',
      text: 'Test',
      timestamp: '09:11',
      isUser: true
    },
    {
      id: '4',
      text: 'Salam Nourah Please transfer this chat to our new colleague Eya',
      timestamp: '09:12',
      isUser: true
    },
    {
      id: '5',
      text: 'ok',
      timestamp: '09:14',
      isUser: false
    },
    {
      id: '6',
      text: "We're waiting for your reply! Please respond within a few minutes to keep your request open, and we'll continue assisting you",
      timestamp: '09:19',
      isUser: false
    }
  ]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigateTo = (page: 'order' | 'chat' | 'support') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: chatMessage.trim(),
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        isUser: true
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatMessage('');
    }
  };

  const sendSupportMessage = () => {
    if (supportMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: supportMessage.trim(),
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        isUser: true
      };
      setSupportMessages(prev => [...prev, newMessage]);
      setSupportMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
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
            <div className="absolute left-0 top-0 h-full w-64 bg-neutral-dark shadow-2xl">
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
                      currentPage === 'order' ? 'bg-brand-lime text-black' : 'text-white hover:bg-neutral-dark'
                    }`}
                  >
                    Order Ride
                  </button>
                  <button
                    onClick={() => navigateTo('chat')}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentPage === 'chat' ? 'bg-brand-lime text-black' : 'text-white hover:bg-neutral-dark'
                    }`}
                  >
                    Driver Chat
                  </button>
                  <button
                    onClick={() => navigateTo('support')}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentPage === 'support' ? 'bg-brand-lime text-black' : 'text-white hover:bg-neutral-dark'
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
                  <div className="absolute top-20 left-16 w-32 h-1 bg-map-accent rotate-45"></div>
                  <div className="absolute top-32 left-32 w-24 h-1 bg-map-accent rotate-12"></div>
                  <div className="absolute top-48 left-12 w-28 h-1 bg-map-accent -rotate-12"></div>
                  <div className="absolute top-64 left-40 w-20 h-1 bg-map-accent rotate-45"></div>
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
                <div className="bg-neutral-dark/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <MapPin size={20} className="text-brand-lime" />
                  <div className="text-white">
                    <div className="text-sm text-neutral-light">Pickup point</div>
                    <div className="font-medium">Bd 11 Janvier 5</div>
                  </div>
                  <ChevronRight size={16} className="text-neutral-light" />
                </div>
              </div>

              {/* User Location Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-brand-lime rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Bottom Panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-dark rounded-t-3xl px-4 py-6">
                {/* Ride Options */}
                <div className="flex gap-3 mb-6 overflow-x-auto">
                  <div className="flex-shrink-0 bg-brand-lime rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Heart size={16} className="text-black" />
                      <span className="text-xs bg-black text-white rounded-full px-1">4</span>
                    </div>
                    <div className="text-black font-medium text-xs">Access Rides</div>
                  </div>
                  <div className="flex-shrink-0 bg-map-accent rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Car size={16} className="text-white" />
                      <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                    </div>
                    <div className="text-white font-medium">Ride</div>
                  </div>
                  <div className="flex-shrink-0 bg-neutral-dark rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Bike size={16} className="text-brand-lime" />
                      <span className="text-xs bg-white text-black rounded-full px-1">1</span>
                    </div>
                    <div className="text-white font-medium">Moto</div>
                  </div>
                  <div className="flex-shrink-0 bg-neutral-dark rounded-2xl px-4 py-3 min-w-[100px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Snowflake size={16} className="text-map-highlight" />
                      <span className="text-xs bg-white text-black rounded-full px-1">4</span>
                    </div>
                    <div className="text-white font-medium">Comfort</div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-neutral-light rounded-2xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-neutral-dark rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-map-accent rounded-full"></div>
                    </div>
                    <span className="text-black text-lg">Where to & for how much?</span>
                  </div>
                  
                  {/* Destination Options */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-neutral-dark" />
                      <span className="text-black">Souq El Had</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-neutral-dark" />
                      <span className="text-black">Polyclinique de la CNSS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-neutral-dark" />
                      <span className="text-black">Borjs Hotel Suites & SPA</span>
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
              <div className="flex items-center gap-3 p-4 bg-neutral-dark">
                <button onClick={toggleMenu} className="text-white">
                  <ArrowLeft size={20} />
                </button>
                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">Noureddine</div>
                  <div className="text-neutral-light text-sm">Driver</div>
                </div>
                <button className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-black" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 bg-black overflow-y-auto">
                {/* Date Separator */}
                <div className="text-center mb-6">
                  <div className="text-neutral-light text-sm mb-2">Thursday, 11 September</div>
                  <div className="flex items-center justify-center">
                    <div className="flex-1 h-px bg-neutral-dark"></div>
                    <div className="mx-4 px-3 py-1 bg-neutral-dark rounded-full border border-neutral-light">
                      <span className="text-neutral-light text-xs">New messages</span>
                    </div>
                    <div className="flex-1 h-px bg-neutral-dark"></div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-2xl px-4 py-3 max-w-[280px] ${
                        message.isUser 
                          ? 'bg-brand-lime text-black rounded-br-md' 
                          : 'bg-neutral-dark text-white rounded-bl-md'
                      }`}>
                        <div className="text-sm mb-1">{message.text}</div>
                        <div className={`text-xs ${message.isUser ? 'text-black/70' : 'text-neutral-light'} text-right`}>
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Reply Options */}
                <div className="space-y-2 mt-4">
                  <div className="bg-transparent border border-brand-lime rounded-2xl px-4 py-3 max-w-[200px]">
                    <div className="text-white text-sm">I'm here</div>
                  </div>
                  <div className="bg-transparent border border-brand-lime rounded-2xl px-4 py-3 max-w-[200px]">
                    <div className="text-white text-sm">Where are you?</div>
                  </div>
                  <div className="bg-transparent border border-brand-lime rounded-2xl px-4 py-3 max-w-[200px]">
                    <div className="text-white text-sm">Please, give me 5 minutes</div>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-neutral-dark">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-neutral-light rounded-full flex items-center justify-center">
                    <Camera size={16} className="text-black" />
                  </button>
                  <div className="flex-1 bg-neutral-light rounded-2xl px-4 py-3">
                    <input
                      type="text"
                      placeholder="Enter your message"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                      className="w-full bg-transparent text-black placeholder-neutral-dark outline-none"
                    />
                  </div>
                  <button className="w-10 h-10 bg-neutral-light rounded-full flex items-center justify-center">
                    <Mic size={16} className="text-black" />
                  </button>
                  <DeafButton />
                  <button 
                    onClick={sendChatMessage}
                    className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center"
                  >
                    <Send size={16} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Support Page */}
          {currentPage === 'support' && (
            <div className="h-full bg-black flex flex-col">
              {/* Support Header */}
              <div className="flex items-center justify-center p-4 bg-neutral-dark">
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
                <div className="bg-brand-lime rounded-2xl p-3 mb-2">
                  <div className="text-black font-medium">I need an agent, please</div>
                </div>
                <div className="text-neutral-light text-xs mb-4">Searching for an available agent...</div>
                
                <div className="bg-neutral-dark rounded-2xl p-3 mb-2 text-center">
                  <div className="text-neutral-light text-xs">Agent joined</div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 bg-black overflow-y-auto">
                {/* Messages */}
                <div className="space-y-4">
                  {supportMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-2xl px-4 py-3 max-w-[280px] ${
                        message.isUser 
                          ? 'bg-brand-lime text-black rounded-br-md' 
                          : 'bg-neutral-dark text-white rounded-bl-md'
                      }`}>
                        <div className="text-sm mb-1">{message.text}</div>
                        <div className={`text-xs ${message.isUser ? 'text-black/70' : 'text-neutral-light'} text-right`}>
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* System Messages */}
                <div className="space-y-4 mt-6">
                  <div className="text-center">
                    <div className="text-neutral-light text-sm">Searching for an available agent...</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-neutral-light text-sm">Agent joined</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-neutral-light text-sm">Request resolved</div>
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="text-center mt-8">
                  <div className="text-white font-bold text-lg mb-6">Did we solve the problem?</div>
                  <div className="flex justify-center gap-4">
                    <button className="w-16 h-16 bg-neutral-dark rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">👍</span>
                    </button>
                    <button className="w-16 h-16 bg-neutral-dark rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">👎</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-neutral-dark">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-neutral-light rounded-full flex items-center justify-center">
                    <Camera size={16} className="text-black" />
                  </button>
                  <div className="flex-1 bg-neutral-light rounded-2xl px-4 py-3">
                    <input
                      type="text"
                      placeholder="Enter your message"
                      value={supportMessage}
                      onChange={(e) => setSupportMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendSupportMessage()}
                      className="w-full bg-transparent text-black placeholder-neutral-dark outline-none"
                    />
                  </div>
                  <button className="w-10 h-10 bg-neutral-light rounded-full flex items-center justify-center">
                    <Mic size={16} className="text-black" />
                  </button>
                  <DeafButton />
                  <button 
                    onClick={sendSupportMessage}
                    className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center"
                  >
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