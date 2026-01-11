import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const targetDate = new Date('2026-01-16T00:00:00').getTime();

  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="time-unit">
      <div className="time-value">
        <span className="digit">{String(value).padStart(2, '0')}</span>
      </div>
      <div className="time-label">{label}</div>
    </div>
  );

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-element element-1">🔥</div>
        <div className="floating-element element-2">✨</div>
        <div className="floating-element element-3">🍳</div>
        <div className="floating-element element-4">⭐</div>
        <div className="floating-element element-5">🌟</div>
        <div className="floating-element element-6">💫</div>
      </div>

      <div className="container">
        <div className="header">
          <div className="cooking-icon">
            <span className="chef-hat">👨‍🍳</span>
            <div className="steam">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <h1 className="main-title">
            Something is <span className="highlight">Cooking</span>
          </h1>
          
          <p className="subtitle">
            Get ready for something amazing on January 16th, 2026
          </p>
        </div>

        <div className="countdown-container">
          <div className="countdown">
            <TimeUnit value={timeLeft.days || 0} label="Days" />
            <div className="separator">:</div>
            <TimeUnit value={timeLeft.hours || 0} label="Hours" />
            <div className="separator">:</div>
            <TimeUnit value={timeLeft.minutes || 0} label="Minutes" />
            <div className="separator">:</div>
            <TimeUnit value={timeLeft.seconds || 0} label="Seconds" />
          </div>
        </div>

        <div className="message-section">
          <div className="cooking-message">
            <p>🔥 The kitchen is heating up...</p>
            <p>✨ Something extraordinary is in the works</p>
            <p>🚀 Stay tuned for the big reveal!</p>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default App;