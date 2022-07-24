// // importing required file for the context

// import { createContext, useState, useEffect } from "react"
// // import { onAuthStateChangeListener } from "../utils/firebase/firebase.utils";

// // actual value that is accessed from the different children components
// export const ModelContext = createContext({

//     modelQuestion: null,
//     setModelQuestion: () => null,

// }); 

// // get the children component 
// export const UserProvider = ({ children }) => {
//     const [modelQuestion, setModelQuestion ] = useState(null);
//     // value that need to be passed on to get and set the universal value for the children components
//     // value will be object of currentUser and setCurrentUser 
//     const value = { modelQuestion, setModelQuestion};

//     // 
//     useEffect(() => {
//         onAuthStateChangeListener((response)=> {
//             console.log(response)
//         });
//     }, [])

//     return <UserContext.Provider value={value}> {children}</UserContext.Provider>
// };