import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Dumbbell, ChevronRight, Calendar, ArrowDown } from 'lucide-react';
import { WorkoutDay } from './pages/WorkoutDay';
import { DailyQuote } from './components/DailyQuote';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const workoutDays = [
  { 
    day: 'Monday', 
    focus: 'Chest & Triceps',
    bgImage: 'https://i.pinimg.com/originals/22/2a/e5/222ae58118070845f6a845b103b0c22d.gif'
  },
  { 
    day: 'Tuesday', 
    focus: 'Back & Biceps',
    bgImage: 'https://media.tenor.com/6bncS0kkSPcAAAAM/villainous-demencia.gif'
  },
  { 
    day: 'Wednesday', 
    focus: 'Shoulders & Abs',
    bgImage: 'https://i.pinimg.com/originals/e3/d8/cb/e3d8cbd46f3ef5e27792aa56a46e0929.gif'
  },
  { 
    day: 'Thursday', 
    focus: 'Legs',
    bgImage: 'https://i.pinimg.com/originals/c0/fe/0d/c0fe0d6fd224d57dc39206d0f780b4dd.gif'
  },
  { 
    day: 'Friday', 
    focus: 'Upper Body',
    bgImage: 'https://i.gifer.com/SyQq.gif'
  },
  { 
    day: 'Saturday', 
    focus: 'Lower Body',
    bgImage: 'https://i.pinimg.com/originals/c9/2b/62/c92b62882ad82245ac9bad6f4b8ee741.gif'
  },
  { 
    day: 'Sunday', 
    focus: 'Rest Day', 
    isRest: true,
    bgImage: 'https://i.pinimg.com/originals/fc/29/b8/fc29b87847952f60aaa5544f4c6df94f.gif'
  },
];

function Home() {
  const splitSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState(
    'https://i.pinimg.com/originals/a9/e3/10/a9e31048503978d8c8c756f9dee6641c.gif'
  );
  const images = [
    'https://i.pinimg.com/originals/a9/e3/10/a9e31048503978d8c8c756f9dee6641c.gif',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/39914043239123.57e8f67498a61.gif', 
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c609543239123.57e8f6730aa0a.gif',  
    'https://i.gifer.com/embedded/download/CkFx.gif',
    'https://w0.peakpx.com/wallpaper/208/287/HD-wallpaper-anime-baki-hanma-character-baki-hanma.jpg', 
    'https://i0.wp.com/www.thebioneer.com/wp-content/uploads/2020/11/Baki-Mscular-Physique.png?resize=598%2C301&ssl=1',

  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setBgImage(randomImage);
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const scrollToSplit = () => {
    splitSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-16">
        {/* <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/originals/a9/e3/10/a9e31048503978d8c8c756f9dee6641c.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div> */}
        <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-bounce mb-6">
            <Dumbbell className="w-20 h-20 mx-auto text-blue-400" />
          </div>
          <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-700 via-yellow-800 to-red-500">
            Transform Your Body,
            <br /> Transform Your Life
          </h1>
          
          <div className="mb-12">
            <DailyQuote />
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={scrollToSplit}
              className="group bg-gradient-to-r from-blue-500 via-pink-700 to-red-500 hover:from-red-600 hover:to-purple-500 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mb-5"
            >
              Start Workout
              <ArrowDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Split Section */}
      <div ref={splitSectionRef} className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Weekly Workout Split
          </h2>
          <p className="text-xl text-gray-300">Plan your week for maximum results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {workoutDays.map((day) => (
            <Link
              key={day.day}
              to={`/workout/${day.day.toLowerCase()}`}
              className={`
                group relative overflow-hidden rounded-2xl p-8
                ${day.isRest
                  ? 'bg-purple-900/20 hover:bg-purple-900/30'
                  : 'bg-blue-900/20 hover:bg-blue-900/30'}
                backdrop-blur-lg border border-white/10
                transition-all duration-300 transform hover:scale-105
              `}
            >
              <div 
                className="absolute inset-0 z-0 opacity-80 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${day.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">{day.day}</h3>
                <p className={`${day.isRest ? 'text-purple-300' : 'text-blue-300'} text-lg`}>
                  {day.focus}
                </p>
                {day.isRest && (
                  <span className="inline-block mt-4 px-4 py-2 bg-purple-500/30 text-purple-200 text-sm rounded-full border border-purple-400/20">
                    Rest Day
                  </span>
                )}
                <ChevronRight className="absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout/:day" element={<WorkoutDay />} />
      </Routes>
    </Router>
  );
}

export default App;
