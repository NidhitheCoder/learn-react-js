import Article from "./Article";
import NavBar from "./Navbar";
import Parent from "./Parent";
import WorkHard from "./WorkHard";


const AntiPatternsToAvoid = () => {
    return (<div>
        {/* Big components */}
        <NavBar />
        <Article />
        {/* Nesting components */}
        <Parent />
        {/* Too much work */}
        <WorkHard />
    </div>)
}

export default AntiPatternsToAvoid;

// 1. Avoid big components. Break big components into smaller reusable components
// 2. Avoid nesting components. Nesting components in same files increase memory consumption.
//    Every rerendering of parent components create new child component.
// 3. Too much work. The component run on all state changes