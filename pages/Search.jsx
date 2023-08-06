import React from "react"
import CocktailDetail from "./CocktailDetail"
import { Link } from "react-router-dom";

export default function Search() {
    
    const [cocktail, setCocktail] = React.useState("")
    const [cocktailData, setCocktailData] = React.useState([])
    const [show, setShow] = React.useState(false)
    const [detail, setDetail] = React.useState(false)
    const [ingredients, setIngredients] = React.useState(false)
        
    React.useEffect(() => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
                .then(res => res.json())
                .then(data => setCocktailData(data.drinks))
            },[cocktail]);   
            
    
    const cocks = cocktailData ? cocktailData.map(item => 
        (<div  className="search-drink-container" key={item.idDrink} onClick={() => setDetail(prevState => !prevState)} > 
            <div className="search-drink-inner-container">
                <img className="search-drink-img" src={item.strDrinkThumb} alt={item.strDrink}/>
                <h3 className="search-drink-name">{item.strDrink}</h3>
            </div>
            <div className="search-drink-inner-container">
                <Link to={item.idDrink}><button className="link-btn" >See More</button></Link>
            </div>
        </div>
        )) : "None"
        
    function lookup(){
        if (cocktail != ""){
            setShow(true)
        } else {
            setShow(false)
        }
    }
    
    
    return (
        <div className="all-search">
        <div className="search-container">
            <input
            className="search-bar"
            type="text" 
            value={cocktail} 
            placeholder="Type here..." 
            onChange={(e) => setCocktail(e.target.value)} 
            />
            <button className="search-btn" onClick={lookup}>Search</button>
        </div>
            {show && cocks}
        </div>
        
    )
}