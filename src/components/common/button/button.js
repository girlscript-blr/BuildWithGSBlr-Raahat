import React from 'react'
import './button.css'

const Button = (props) => {

    console.log(props);
    let sec;
    if( props.variant === "secondary")
        sec = true;
    else
        sec = false;

    return (
        <div>  
            <button 
                class={ "button " + ( sec ? 'secondary ' : 'primary ') + ( props.isLarge ? 'larger ' : 'smaller ') }
                onClick={props.onClick}
                type={props.type}
                disabled={props.disabled}>
            {props.label}
            </button>
        </div>
    )
}

Button.defaultProps = {
    type: "button",
    variant: "secondary",
    isLarge: false,
    disabled: false,
};

export default Button

/*
import Button from './components/common/button/button';


<Button label="Click Me" />
<Button label="Text to add" 
        type="button/submit/reset" 
        variant="primary/secondary" 
        isLarge={true/false} 
        disabled={true/false} 
        />
*/
