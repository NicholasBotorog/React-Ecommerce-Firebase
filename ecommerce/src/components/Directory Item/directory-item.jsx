import { Link } from 'react-router-dom'
import './directory-item.scss'

const DirectoryItem = ({ category }) => { 
  return(
    <div className="directory-item-container">
    <div className="background-image" style={{ backgroundImage: `url(${category.imageUrl})`}}/>
    <div className="body">
      <Link to={`shop/${category.title.toLowerCase()}`}>
        <h2>{category.title}</h2>
        <p>Buy Now</p>
      </Link>
    </div>
  </div>
  )
}
export default DirectoryItem