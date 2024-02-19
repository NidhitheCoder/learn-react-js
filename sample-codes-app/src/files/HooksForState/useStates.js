import { useState } from "react"

const UseStates = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return { title, name, setName, setTitle, age, setAge }
}

export default UseStates;