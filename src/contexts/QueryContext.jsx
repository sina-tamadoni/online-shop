import React, { createContext, useContext, useState } from "react";

const QueryContext = createContext();
function QueryProvider({ children }) {
  const [query, setQuery] = useState({});
  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}

function useQuery() {
  return useContext(QueryContext);
}

export default QueryProvider;
export { useQuery };
