'use client'
import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define action types
type Action = { type: string; payload?: any };

// Define state type
type State = {
  [key: string]: any; // Store data as key-value pairs
};

// Define action creators
const UPDATE_DATA = "UPDATE_DATA";

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case UPDATE_DATA:
      // Merge the new data with the existing state, only updating specific fields
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext<{
  state: State;
  updateData: (data: { [key: string]: any }) => void;
}>({
  state: {}, // Initial state with an empty object
  updateData: () => {},
});

export function AppWrapper({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {});

  // Function to update state with new data
  const updateData = (data: { [key: string]: any }) => {
    dispatch({ type: UPDATE_DATA, payload: data });
  };

  return (
    <AppContext.Provider value={{ state, updateData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}


