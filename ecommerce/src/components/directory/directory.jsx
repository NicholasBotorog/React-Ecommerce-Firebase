import { categories } from "../helpers/category.js";
import DirectoryItem from "../Directory Item/directory-item.jsx";
import './directory.scss'


const Directory = () => { 

  return (
    <div className="directory-container">

      {categories.map((category) => ( 
        <DirectoryItem key = {category.id} category={category}/>
      ))}

    </div>
  );
}

export default Directory
