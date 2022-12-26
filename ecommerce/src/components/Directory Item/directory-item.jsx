import { Link, useNavigate } from 'react-router-dom'
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

const DirectoryItem = ({ category }) => { 
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(`/shop/${category.title.toLowerCase()}`)

  return(
    <DirectoryItemContainer onClick={onNavigateHandler}>
    {/* <div className="background-image" 
    imageUrl={category.imageUrl}
    // style={{ backgroundImage: `url(${category.imageUrl})`}}
    /> */}

    <BackgroundImage imageUrl = { category.imageUrl } />

    <Body>
      {/* <Link to={`shop/${category.title.toLowerCase()}`}> */}
        <h2>{category.title}</h2>
        <p>Buy Now</p>
      {/* </Link> */}
    </Body>
  </DirectoryItemContainer>
  )
}
export default DirectoryItem