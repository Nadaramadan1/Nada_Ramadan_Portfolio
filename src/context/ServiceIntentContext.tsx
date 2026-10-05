import React, { createContext, useContext, useState } from 'react';

interface ServiceIntentContextType {
  selectedServiceId: string | null;
  selectedServiceTitle: string | null;
  selectService: (id: string | null, title?: string | null) => void;
  clearService: () => void;
}

const ServiceIntentContext = createContext<ServiceIntentContextType>({
  selectedServiceId: null,
  selectedServiceTitle: null,
  selectService: () => {},
  clearService: () => {},
});

export const ServiceIntentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | null>(null);

  const selectService = (id: string | null, title?: string | null) => {
    setSelectedServiceId(id);
    setSelectedServiceTitle(title ?? null);
  };

  const clearService = () => {
    setSelectedServiceId(null);
    setSelectedServiceTitle(null);
  };

  return (
    <ServiceIntentContext.Provider
      value={{ selectedServiceId, selectedServiceTitle, selectService, clearService }}
    >
      {children}
    </ServiceIntentContext.Provider>
  );
};

export const useServiceIntent = () => useContext(ServiceIntentContext);
