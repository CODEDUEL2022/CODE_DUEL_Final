import React from "react";

interface ButtonProps {
    text: String
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {text} = props

    return (
        <button>
            {text}
        </button>
    )
}