import React, { useMemo, useState } from "react"

const expensiveCalculation = () => { };

const WorkHard = () => {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // Any time any of the state changes it will rerender 
    // the component and call the function expensiveCalculation again.
    // const total = expensiveCalculation(count);

    // Use useMemo() hook for avoid unwanted function call on other states change.
    const total = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div>
            <h1>Total: {total}</h1>
            <p>Other: {other}</p>
        </div>
    )
}

export default WorkHard;