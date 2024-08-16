// Write your JS code here

import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(EachItem => (
        <BlogItem BlogDetails={EachItem} key={EachItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
