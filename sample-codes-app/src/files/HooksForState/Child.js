import { useEffect } from "react";
import UseStates from "./useStates";

const Child = () => {
    const { title, name, age } = UseStates();

    useEffect(() => {
        console.log({ title, name, age })
    }, [title, name, age])
    return (
        <div>
            <p>Child</p>
            <p>{title}</p>
            <p>{age}</p>
            <p>{name}</p>
        </div>
    )
}

export default Child;