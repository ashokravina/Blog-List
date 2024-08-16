// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {BlogDetails} = props
  const {title, description, publishedDate} = BlogDetails
  return (
    <li className="item-container">
      <div className="item-card">
        <div className="card-container">
          <h1 className="item-heading">{title}</h1>
          <p className="paragraph">{description}</p>
        </div>
        <p className="item-para">{publishedDate}</p>
      </div>
      <hr className="line" />
    </li>
  )
}
export default BlogItem
