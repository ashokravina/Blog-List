// Write your JS code here

import './index.css'

const UserInfo = () => {
  return (
    <div className="user-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
        alt="profile"
        className="img"
      />
      <h1 className="user-heading">Wade Warren</h1>
      <p className="user-para">Software developer at UK</p>
    </div>
  )
}
export default UserInfo
