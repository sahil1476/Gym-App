import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                FitLife
              </span>
            </div>
            <p className="text-gray-400">
              Transform your body and mind with our comprehensive workout plans.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/workout/monday" className="text-gray-400 hover:text-white transition-colors">
                  Workouts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Workout Days</h3>
            <ul className="space-y-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <li key={day}>
                  <Link 
                    to={`/workout/${day.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {day}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ssahilsharma_/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              
              <a href="https://www.facebook.com/profile.php?id=100012746700006" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sahil-sharma-34989519a/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              © 2025 FitLife. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}