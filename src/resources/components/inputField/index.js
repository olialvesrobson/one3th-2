import React from 'react'

export default function InputComponent(props) {
  // const labelStyle = {color : 'gray', fontSize:'14px', padding: '5px', marginRight: '5px', width: '250px', textAlign: 'right'}
  const inputStyle = {borderColor : 'white', backgroundColor: 'white', fontSize:'14px', margin: '5px', padding: '5px', width: '210px'}
  return (
    <div>

      <input 
        style={inputStyle}
        type={props.inputType}
        value={props.inputText}
        onChange={props.inputAction}
        placeholder={props.labelText}
      />
    
    </div>
  )
}

export function InputWithLabelComponent(props) {
  const labelStyle = {color : 'gray', fontSize:'14px', padding: '5px', marginRight: '5px', width: '250px'}
  const inputStyle = {borderColor : 'white', backgroundColor: 'white', fontSize:'14px', margin: '5px', marginTop: '10px', padding: '5px', width: '250px'}
  const containerStyle = {alignItems: 'center', justifyContent: 'center'}
  
  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{props.labelText}</label><br/>
      <input 
        style={inputStyle}
        type={props.inputType}
        value={props.inputText}
        onChange={props.inputAction}
      />
    
    </div>
  )
}