import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner = () => {
  
    return (
      <div>
        <div className="text-center">
            <img src={loading} alt ="loading" />
        </div>
      </div>
    )
}

export default Spinner
