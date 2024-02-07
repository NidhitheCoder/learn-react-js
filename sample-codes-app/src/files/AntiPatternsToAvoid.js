import React from "react";

import Article from "./Article";
import NavBar from "./Navbar";
import Parent from "./Parent";
import WorkHard from "./WorkHard";
import ReduceBundle from "./ReduceBundle";


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