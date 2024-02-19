import React from "react";

import Article from "./Article";
import NavBar from "./Navbar";
import Parent from "./Parent";
import WorkHard from "./WorkHard";
import ReduceBundle from "./ReduceBundle";
import PropDrilling from "./PropsDrilling";
import PropPlowing from "./PropPlowing";
import MessyEvents from "./MessyEvents";
import GroupStates from "./GroupStates";
import HooksForState from "./HooksForState";


const AntiPatternsToAvoid = () => {
    return (<div>
        {/* Big components */}
        <NavBar />
        <Article />
        {/* Nesting components */}
        <Parent />
        {/* Too much work */}
        <WorkHard />
        {/* Remove unnecessary div's */}
        {/* <div>
            <NavBar />
            <Article />
        </div> */}
        <React.Fragment>
            <NavBar />
            <Article />
        </React.Fragment>
        {/* Huge bundle */}
        <ReduceBundle />
        {/* PropDrilling */}
        <PropDrilling />
        {/* Prop plowing */}
        <PropPlowing />
        {/* Messy Events */}
        <MessyEvents />
        {/* Group states */}
        <GroupStates />
        <HooksForState />
    </div>)
}

export default AntiPatternsToAvoid;

// 1. Avoid big components. Break big components into smaller reusable components
// 2. Avoid nesting components. Nesting components in same files increase memory consumption.
//    Every rerendering of parent components create new child component.
// 3. Too much work. The component run on all state changes. use useMemo hook.
// 4. Remove pointless div's. use <React.Fragment> or <>.
// 5. Messy files. structure all files with its own folder.
// 6. Reduce bundle size. React.lazy function helps to reduce the bundle size.
// 7. PropDrilling. Use redux or contexts to avoid prop drilling.
// 8. PropPlowing. A child components with lots of props so we have an object contains 
//    keys that exactly matches to the child components props so we can use spread operator.
// 9. Messy Events. Curried function helps to avoid messy functions.