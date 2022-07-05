import { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("superman");
    console.log('query: ', query);

    return (
        <DataContext.Provider value={{ setQuery }}>
            { children }
        </DataContext.Provider>
    )
}