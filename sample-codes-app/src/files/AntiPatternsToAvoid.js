import Article from "./Article";
import NavBar from "./Navbar";
import Parent from "./Parent";


const AntiPatternsToAvoid = () => {
    return (<div>
        <NavBar />
        <Article />
        <Parent />
    </div>)
}

export default AntiPatternsToAvoid;

// 1. Avoid big components. Break big components into smaller reusable components
// 2. Avoid nesting components. Nesting components in same files increase memory consumption.
//    Every rerendering of parent components create new child component.