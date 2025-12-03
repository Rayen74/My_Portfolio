import { createContext, useState } from 'react';

export const CollapsedContext = createContext();

export const CollapsedProvider = ({ children }) => {
  // Initialize with collapsed: true so menu is hidden on mobile by default
  const [collapsed, setCollapsed] = useState(true);

  return (
    <CollapsedContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </CollapsedContext.Provider>
  );
};