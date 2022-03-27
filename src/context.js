import React, {useState, useContext, createContext} from "react";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchCocktails = async () => {
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
  }


  return (
    <AppContext.Provider value={{cocktails,search,isLoading}}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext};