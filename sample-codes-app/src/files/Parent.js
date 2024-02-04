import React from "react";

const handleClick = () => {
    console.log('Clicked');
}


const Child = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick} >Click me..!</button>
        </div>
    )
}


const Parent = () => {
    return (
        <div>
            <h2>Parent</h2>
            <Child onClick={handleClick} />
        </div>
    )
}

export default Parent;