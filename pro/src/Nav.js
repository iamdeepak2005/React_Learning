import React from 'react'
import {Link} from 'react-router'

function Nav() {
  return (
    <div>
      <Link to={'/timer'}>Timer</Link>
      
    </div>
  )
}
// Life cycles in React 
// 1.creating(mounting),updating,deleting(unmounting)

export default Nav