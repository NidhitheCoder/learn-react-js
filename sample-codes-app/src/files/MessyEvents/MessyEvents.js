const MessyEvents = () => {
    // const handleIt = (e, v) => {
    //     console.log(e, v)
    // };

    const handleIt = (v) => { // Curried function
        return ((e) => console.log(e, v))
    }

    return (
        <div>
            {/* <input onChange={(e) => handleIt(e, 1)} />
            <input onChange={(e) => handleIt(e, 2)} />
            <input onChange={(e) => handleIt(e, 3)} /> */}
            <input onChange={handleIt(1)} />
            <input onChange={handleIt(2)} />
            <input onChange={handleIt(3)} />
        </div>
    )
}

export default MessyEvents;