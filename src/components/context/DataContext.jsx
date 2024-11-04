import React, { createContext, useState } from "react";

// Create the context
export const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
  // Declare the states you want to share
  const [dataNow, setDataNow] = useState(null);
  const [loading, setLoading] = useState(false);
  const[id,setId] = useState(null)
  console.log(loading);
  // Context value to share
  const value = {
    dataNow,
    setDataNow,
    loading,
    setLoading,
    id,
    setId,
  };

  // Return the provider with the context value
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
