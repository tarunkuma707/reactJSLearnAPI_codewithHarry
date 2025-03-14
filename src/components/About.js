import React, { useState } from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    // })

    let myStyle = {
        color: props.mode === "dark" ? "white" : '#042743',
        backgroundColor : props.mode === "dark" ? "rgb(36,74,104)" : 'white',
    }
    
  return (
    <div className='container p-3' style={{color: props.mode === "dark" ? "white" : '#042743'}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to Analyze your text quickly and efficiently. Be it word count, character count and more.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myStyle}>
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    It is free to use feww character tool that provides you lot
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={myStyle}>
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software sworks in any web Browser.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
