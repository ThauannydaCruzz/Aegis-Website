
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on the index page
  const isIndexPage = location.pathname === '/';
  
  return (
    <nav className="absolute top-0 left-0 right-0 w-full py-6 px-6 md:px-10 lg:px-20 flex items-center justify-between z-20">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <ShieldCheck className="h-8 w-8 text-aegis-purple" />
        <div className="text-2xl font-bold text-white">
          <span className="aegis-gradient-text">Aegis</span>
        </div>
      </div>
      
      {!isIndexPage && !location.pathname.includes('/login') && (
        <div className="flex items-center gap-8 text-white/80">
          <button className="hover:text-white transition-colors" onClick={() => navigate('/aegis-team')}>Sobre</button>
          <button className="hover:text-white transition-colors" onClick={() => navigate('/security-dashboard')}>Dashboard</button>
          <button className="hover:text-white transition-colors" onClick={() => navigate('/chatbot')}>IA Segurança</button>
          <button className="px-5 py-2 bg-aegis-purple rounded-md text-white hover:bg-aegis-purple/90 transition-colors" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="px-5 py-2 bg-white text-aegis-purple rounded-md hover:bg-white/90 transition-colors" onClick={() => navigate('/login')}>
            Comece Agora
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
