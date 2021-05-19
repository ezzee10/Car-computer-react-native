// import { types } from "../types/types"
// import { uiFinishLoading, uiStartLoading } from './ui';


// export const startRegister = ( { user } ) => {

//     return ( dispatch ) => {

//          firebase.auth().signInWithPopup( googleAuthProvider)
//              .then( ({ user }) => {
//                  dispatch(
//                      login(user.uid, user.displayName)
//                  )
//             })
//      } 
// }


// export const startGoogleLogin = () => {
//     return ( dispatch ) => {

//         firebase.auth().signInWithPopup( googleAuthProvider)
//             .then( ({ user }) => {
//                 dispatch(
//                     login(user.uid, user.displayName)
//                 )
//             })
//     }
// }


// export const login = (uid, displayName) => ({
//     type: types.login,
//     payload: {
//         uid,
//         displayName
//     }  
// })

// export const startLogout = () => {
    
//     return async ( dispatch ) => {
//         await firebase.auth().signOut();

//         dispatch(logout() );
//     }

// }

// export const logout = () => ({
//     type: types.logout
// })

