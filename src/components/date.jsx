import React, { useState, useEffect } from 'react';

function DateTimeComponent() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Display date and time here */}
      <p>{currentDateTime.toDateString()}</p>
    </div>
  );
}

export default DateTimeComponent;
