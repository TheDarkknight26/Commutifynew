// 'use client'

// import { Provider } from "react-redux"
// import store from "."
// import React from "react"



// function Providers({ children }: { children :React.ReactNode}) {
//     return (
//         <Provider store={store}>{children}</Provider>
//     )
// }



'use client'
// export default Providers
import { Provider } from "react-redux"
import store from "."
import React from "react"
// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './path-to-your-redux-store'; // Make sure to provide the correct path

/**
 * @typedef {Object} ProvidersProps
 * @property {React.ReactNode} children - The children to be wrapped by the Provider.
 */

/**
 * A functional component that wraps its children with a Redux Provider.
 * 
 * @param {ProvidersProps} props - The component props.
 * @returns {JSX.Element} The JSX representation of the component.
 */
function Providers({ children }) {
    return (
        <Provider store={store}>{children}</Provider>
    );
}

export default Providers;
