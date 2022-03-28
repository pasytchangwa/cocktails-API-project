import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        setCocktail(data.drinks[0]);
        setLoading(false);
      });
  }