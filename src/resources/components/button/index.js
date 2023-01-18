import React from 'react'

export default function ButtonSubmit(props) {
    const buttonStyle = {color : 'blue', fontSize:'14px', padding: '5px', borderRadius: '10px', borderSize: '0px', width: '100px'}

    return (
        <div>
            <button 
                type="submit"
                style={buttonStyle}
                >{props.buttonText}
            </button>
        </div>
    )
}
