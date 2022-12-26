import './directory-item.scss'

const DirectoryItem = ( { category }) => { 
  return(
    <div className="directory-item-container">
    <div className="background-image" style={{ backgroundImage: `url(${category.imageUrl})`}}/>
    <div className="body">
      <h2>{category.title}</h2>
      <p>Buy Now</p>
    </div>
  </div>
  )
}
export default DirectoryItem