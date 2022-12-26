import { categories } from "../helpers/category.js";
import './directory.scss'
import DirectoryItem from "../Directory Item/directory-item.jsx";

const Directory = () => { 

  return (
    <div className="categories-container">

      {categories.map((category) => ( 
        <DirectoryItem key = {category.id} category={category}/>
      ))}

    </div>
  );
}

export default Directory
