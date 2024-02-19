import Child from "./Child"
import UseStates from "./useStates"

const HooksForState = () => {
    const { setName } = UseStates();
    const updateName = () => {
        setName('heaven');
    }

    return (
        <div>
            <p>Hello</p>
            <Child />
            <button onClick={updateName} >Update Name</button>
        </div>
    )
}

export default HooksForState;