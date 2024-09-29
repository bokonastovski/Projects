// FilterContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface FilterContextType {
  filter: string;
  ourWorldType: string;
  setFilter: (filter: string) => void;
  setOurWorldType: (ourWorldType: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<string>("all");
  const [ourWorldType, setOurWorldType] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{ filter, ourWorldType, setFilter, setOurWorldType }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export { FilterProvider, useFilter };
