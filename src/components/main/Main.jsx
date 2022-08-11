import React from 'react'
import '../comp_css/style.css'

function Main() {
  return (
    <div className='Main'>
        <div className="main_left">
            <img src="https://api.modme.uz/uploads/osq4Bjs2zDVhtmAb.png" alt="" />
        </div>
        <div className="main_right">
            <div className="main_right_title">
                <div className="log">
                    <span>Login</span>
                </div>
                <div className="language">
                    <span>En</span> |
                    <span>Ru</span> |
                    <span>Uz</span> | 
                    <span>ID</span>
                </div>
            </div>
            <div className="main_right_form">
                <div className="inp_num">
                    <input type="text" placeholder='+998'/>
                </div>
                <div className="inp_password">
                    <input type="text"/>
                </div>
                <button className='btn'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Main