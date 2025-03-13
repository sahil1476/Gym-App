import React, { useState, useEffect } from 'react';

const quotes = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind you have to convince.",
  "The harder you work, the better you get.",
  "Strength does not come from the body. It comes from the will.",
  "The only place where success comes before work is in the dictionary.",
  "Don't wish for it,🤸‍♂️ work for it.",
  "Your health is an investment, not an expense."
];

export function DailyQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const today = new Date().getDate();
    const quoteIndex = today % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
      <p className="relative text-2xl font-light text-center text-white leading-relaxed">
        "{quote}"
      </p>
    </div>
  );
}