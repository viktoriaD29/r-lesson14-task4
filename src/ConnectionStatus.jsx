import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const onOffline = () => {
      setStatus(false);
    };
    window.addEventListener('offline', onOffline);

    const onOnline = () => {
      setStatus(true);
    };
    window.addEventListener('online', onOnline);

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    }
  }, []);

  if (status) {
    return <div className="status">online</div>;
  }
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;

