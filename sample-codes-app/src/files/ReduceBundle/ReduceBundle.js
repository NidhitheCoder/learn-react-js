import React, { Suspense } from "react";
const Navbar = React.lazy(() => import('../Navbar'))

const ReduceBundle = () => {

    return (
        <div>
            <p>Reduce bundle Size</p>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
            </Suspense>
        </div>
    )
}

export default ReduceBundle;