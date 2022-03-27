import React, {useState, useContext, useEffect, createContext, useCallback} from "react";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState('b');
  const [isLoading, setIsLoading] = useState(true);

  const fetchCocktails = useCallback(async () => {
   try {
     setIsLoading(true);
     const response = await fetch(url + search);
     const data = await response.json();
     console.log(data)
     setCocktails(data.drinks);
     setIsLoading(false);
   } catch (error) {
     console.log(error);
   }
  }, [search]);

  useEffect(() => {
    fetchCocktails();
  }, [search, fetchCocktails])

  return (
    <AppContext.Provider value={{cocktails,search,isLoading, setSearch,}}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext};