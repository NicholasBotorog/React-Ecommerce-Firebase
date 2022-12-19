import { categories } from "../helpers/category.js";
import CategoryItem from "../Categories/category-item.jsx";
import './directory.scss'

const Directory = () => { 

  return (
    <div className="categories-container">

      {categories.map((category) => ( 
        <CategoryItem key = {category.id} category={category}/>
      ))}

    </div>
  );
}

export default Directory
