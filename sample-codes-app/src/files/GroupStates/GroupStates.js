import { useState } from "react";

const GroupStates = () => {
    const [state, setState] = useState({
        name: 'Hello',
        age: 12,
        height: 12,
    })

    const updateName = () => { setState({ ...state, name: 'Jan' }) };
    const updateAge = () => { setState({ ...state, age: 43 }) };
    const updateHeight = () => { setState({ ...state, height: 23 }) };

    return (<div>
        <button onClick={updateName} >Update name: {state.name}</button>
        <button onClick={updateAge} > Update age: {state.age}</button>
        <button onClick={updateHeight}>Update height: {state.height}</button>
    </div>)
}

export default GroupStates;