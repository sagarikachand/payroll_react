import React from 'react'


const Button =( props ) =>{

    let btnStyle={
        padding: '10px 25px',
        textTransform:'capitalise',
        color: props.color,
        background : props.bgColor,
        cursor:'pointer',
        fontSize: '14px',
        marginLeft:'10px',
        borderRadius:'5px'
    }
   return (
       <button className="action_button" disabled={props.disableBtn} type="button" onClick={props.click}  style={ btnStyle }>{props.children}</button>
   )
}

export default Button


