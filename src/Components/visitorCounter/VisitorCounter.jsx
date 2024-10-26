import React, { useState, useEffect } from 'react';
import { fetchVisitorCounts } from '../Services/Api';
import { useSpring, animated } from 'react-spring';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVisitorsCount = async () => {
      try {
        const data = await fetchVisitorCounts();
        if (data && data.count) {
          setVisitorCount(data.count);
        }
      } catch (err) {
        setError("Failed to load visitor count");
      } finally {
        setLoading(false);
      }
    };
    getVisitorsCount();
  }, []);

  const props = useSpring({
    number: visitorCount,
    from: { number: 0 },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="relative bg-cover text-center rounded-lg overflow-hidden bg-[url('https://example.com/your-amazing-background.jpg')]">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative py-10">
        {loading ? (
          <p className="text-2xl text-white font-semibold">Loading...</p>
        ) : error ? (
          <p className="text-2xl text-red-500 font-semibold">{error}</p>
        ) : (
          <>
            <h1 className="text-5xl font-bold text-white">Total Visitors</h1>
            <animated.p className="text-7xl font-extrabold text-white">
              {props.number.to((n) => n.toFixed(0))}
            </animated.p>
          </>
        )}
      </div>
    </div>
  );
}

export default VisitorCounter;
