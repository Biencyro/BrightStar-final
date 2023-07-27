// import {useState} from 'react';
// import userSignUp from '../auth/userSignUp';
// import { useNavigate, useLocation} from "react-router-dom";


// const SignUp = (props) => {
//     const [email, setEmail]= useState("");
//   const [password, setPassword]= useState("");
//   const [errorMessage,setErrorMessage] = useState(null);

//   const navigate= useNavigate ();
//     const location = useLocation();

//     const from = location.state?.from?.pathname;

//     const { error, signUp} = userSignUp();

//     const handleSignOut = async(e) => {
//        e.preventDefault();
        
//            await signUp(email, password)
        
//            if(!error) {
//              navigate (from, {replace: true})
//              setEmail("")
//              setPassword ("")
        
//                  return
//                } else {
//                  setErrorMessage(error)
//                }
        
//              }


//   return (
//     <>
//     <h2>Create your account</h2>
//     <form onSubmit={handleSignOut}>
//       <input type="email"  placeholder='Email' value={email}
//       onChange={(e) => setEmail(e.target.value)}/>
//       <input type="password" placeholder='Password' value={password}
//       onChange={(e) => setPassword(e.target.value)}/>


//       {error && <p>{errorMessage}</p>}
//       <button type='submit'>Sign Up</button>
//       <p>Have an account already?</p>
//       <button onClick={props.toggleForm} type='submit'>Login </button>
//     </form>
//     </>
//   );
// };

// export default SignUp

// // import {useState} from 'react';
// // import userSignUp from '../auth/userSignUp';
// // import { useNavigate, useLocation} from "react-router-dom";

// // const SignUp = (props) => {
// //     const [email, setEmail]= useState("");
// //     const [password, setPassword]= useState("");
// //     const [errorMessage,setErrorMessage] = useState(null);
    
// //     const navigate= useNavigate ();
// //     const location = useLocation();

// //     const from = location.state?.from?.pathname || "/dashboard"


// //     const { error, signUp} = userSignUp();

// //     const handleSignOut = async(e) => {
// //       e.preventDefault();

// //       await signUp(email, password)

// //       if(!error) {
// //         navigate (from, {replace: true})
// //         setEmail("")
// //         setPassword ("")

// //         return
// //       } else {
// //         setErrorMessage(error)
// //       }

// //     }

// //   return (
// //     <>
// //     <h2>Create your account</h2>
// //      <form onSubmit={handleSignOut}>
// //       <input type="email" placeholder="email"
// //       value = {email}
// //       onChange = {(e) => setEmail(e.target.value)}/>

// //       <input type="password" placeholder="password"
// //       value = {password}
// //       onChange = {(e) => setPassword(e.target.value)}/>

// //       {error && <p>{errorMessage}</p>}
      
// //       <button type='submit'>Login</button>
// //       </form>
// //       <p>Have an account already?</p>
// //       <button onClick  ={props.toggleForm}>Login</button>
// //     </>
// //   );
// // };

// // export default SignUp;