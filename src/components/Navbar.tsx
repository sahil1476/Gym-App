import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Dumbbell className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              FitLife
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/workout/monday" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Workouts
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}