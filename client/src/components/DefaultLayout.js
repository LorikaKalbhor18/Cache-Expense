import React from 'react'
import '../resourses/default-layout.css'
function DefaultLayout(props) {
  return (
    <div className='layout'>
        <div className="header  d-flex justify-content-between align-items-center">
            <h1 className="logo">CACHE</h1>
            <h1 className='username'>Username</h1>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout