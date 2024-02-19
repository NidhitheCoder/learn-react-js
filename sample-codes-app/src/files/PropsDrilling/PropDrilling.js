import React, { useState } from 'react';

const GrandChild = ({count}) => {
    return (
        <div>{count.toString}</div>
    )
}

const Child = ({count}) => {
    return (<GrandChild count={count} />)
}


const PropDrilling = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Prop drilling</h2>
            <Child count={count} />
        </div>
    )
}

export default PropDrilling;