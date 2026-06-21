import React from 'react'
import './styles/profile.css'

function profile() {
  return (
    <div>
      <div className="prof">
        <div className="thumbnail">
        <div className="Pfp">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
        <div className="Intro">
         <div className="intro">

          <h1>Jane Doe</h1>
        <div className="bio">
          <p>🌷 Just a girl with goals and good vibes.
            ☁️ Living, learning, and growing.
            💫 Happiness is my favorite accessory.
          </p>
        </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default profile