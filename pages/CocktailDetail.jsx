import React from "react"
import { useParams, Link } from 'react-router-dom';

export default function CocktailDetail(){
    
    let { id } = useParams()
    const [cocktailInfo, setCocktailInfo] = React.useState([])
    const [instructions, setInstructions] = React.useState(false)
    
    React.useEffect(() => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(data => setCocktailInfo(data.drinks[0]))
            },[]); 
            
    //console.log(cocktailInfo)
    
    return (
        <div className="cocktail-detail-container">
            <div className="cocktail-detail-info">
                <div className="cocktail-detail-left">
                    <img className="cocktail-detail-img" src={cocktailInfo.strDrinkThumb} alt={cocktailInfo.strDrink} width="120px"/>
                    <h2 className="cocktail-detail-name">{cocktailInfo.strDrink}</h2>
                    <button className="instructions-btn" onClick={() => setInstructions(prevState => !prevState)}>Show Instructions</button>
                </div>
                <div className="cocktail-detail-right">
                    <h3>Ingredients</h3>
                    <p>{cocktailInfo.strMeasure1} {cocktailInfo.strIngredient1}</p>
                    <p>{cocktailInfo.strMeasure2} {cocktailInfo.strIngredient2}</p>
                    <p>{cocktailInfo.strMeasure3} {cocktailInfo.strIngredient3}</p>
                    <p>{cocktailInfo.strMeasure4} {cocktailInfo.strIngredient4}</p>
                    <p>{cocktailInfo.strMeasure5} {cocktailInfo.strIngredient5}</p>
                    <p>{cocktailInfo.strMeasure6} {cocktailInfo.strIngredient6}</p>
                    <p>{cocktailInfo.strMeasure7} {cocktailInfo.strIngredient7}</p>
                    <p>{cocktailInfo.strMeasure8} {cocktailInfo.strIngredient8}</p>
                    <p>{cocktailInfo.strMeasure9} {cocktailInfo.strIngredient9}</p>
                    <p>{cocktailInfo.strMeasure10} {cocktailInfo.strIngredient10}</p>
                </div>
            </div>
            <div>
                {instructions && <p>{cocktailInfo.strInstructions}</p>}
            </div>
        </div>
    )
}