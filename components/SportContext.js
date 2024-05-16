import React, { createContext, useState, useContext } from 'react';

const SportContext = createContext();

export const useSport = () => useContext(SportContext);

export const SportProvider = ({ children }) => {
  const [sport, setSport] = useState('cricket'); // default sport

  return (
    <SportContext.Provider value={{ sport, setSport }}>
      {children}
    </SportContext.Provider>
  );
};
