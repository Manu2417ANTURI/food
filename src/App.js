import{ useState, useEffect} from "react";
import './App.css';
import Buscar from "./components/Buscar";
import RecetaCard from "./components/RecetaCard";


const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="nav">
      <br/>
      <br/>
        
       
         <h2>DELICIOUS</h2> 
         <h2>RECIPES</h2>  <Buscar 
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}/>
         
    
       <div className="padre">
      
       <br/>

  
    <div className="container">
    <div className="recipes">

    {recipes ? recipes.map(recipe => (
      <RecetaCard
         key={recipe.idMeal}
         recipe={recipe}
      />
    )) : "No Results."}
    
  </div>
  </div>
  </div>
  </div>
  
);
}

export default App;