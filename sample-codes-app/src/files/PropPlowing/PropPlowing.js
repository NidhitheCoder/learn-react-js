const Child = ({ id, name, age }) => {
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}


const PropPlowing = () => {
    const data = {
        id: 12,
        name: 'Jack',
        age: 23
    };

    return (<div>
        <p>Prop plowing</p>
        {/* <Child name={data.name} id={data.id} age={data.age} /> */}
        <Child {...data} />
    </div>)
}

export default PropPlowing;