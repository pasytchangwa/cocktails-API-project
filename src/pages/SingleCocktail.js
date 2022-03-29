import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIgredient2,
            strIgredient3,
            strIgredient4,
            strIgredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIgredient2,
            strIgredient3,
            strIgredient4,
            strIgredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }

          setCocktail(newCocktail)
        } else {
         setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
      } 
      }
    getCocktail();
    }, [id])

    if(loading) {
      return <Loading />
    }
    if (!cocktail) {
      return <h2 className='section-title'>No cocktail found</h2>
    }

    const {name, image, info, category, glass, instructions, ingredients} = cocktail;
  return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
         Back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
             <span className="drink-data">
              name: {name}
             </span>
            </p>
            <p>
             <span className="drink-data">
              category: {category}
             </span>
            </p>
            <p>
             <span className="drink-data">
              info: {info}
             </span>
            </p>
            <p>
             <span className="drink-data">
              glass: {glass}
             </span>
            </p>
            <p>
             <span className="drink-data">
              instructions: {instructions}
             </span>
            </p>
            <p>
             <span className="drink-data">
              ingredients: </span>
              {ingredients.map((ingredient, index) => {
               return ingredient? <span key={index}>{ingredient}</span> : null
              })}
            </p>
          </div>
        </div>

       </section>
    )


 }