import React from 'react'
import Attach from '../img/attach.png';
const Input = () => {
  return (
    <div className="input-container">
      <div className="input-section">
        <input placeholder="Enter your message"/>
      </div>
      <div className="input-info">
        <label htmlFor="attach-image">
            <img src={Attach} alt=""/>
        </label>
        <input id="attach-image" type="file" />

        <button>Send</button>
      </div>
    </div>
  )
}

export default Input