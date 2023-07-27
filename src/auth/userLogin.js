import {projectAuth} from '../firebase/config'

let error  = null;

const login  =async (email,password)  => {
    error =null;

    try {
        const res  = await projectAuth.signInWithEmailAndPassword
        (email,password);
        error  = null;
        console.log(res.user);
        
        return res;
    } catch ( err) {
        error = err.message;
        console.log(error);
       
    }
};

const userLogin = ()  =>{
    return {error, login};
};

export default userLogin;

/*import { projectAuth } from '../firebase/config';

let error = null;

// Function to check if the user with the specified email exists
const checkUserByEmail = async (email) => {
  try {
    const signInMethods = await projectAuth.fetchSignInMethodsForEmail(email);
    return signInMethods.length > 0;
  } catch (error) {
    console.error("Error checking user by email:", error.message);
    return false;
  }
};

// Function to login/sign in the user
const login = async (email, password) => {
  error = null;

  try {
    // Check if the user's email is registered
    const emailExists = await checkUserByEmail(email);

    if (!emailExists) {
      // If the email is not registered, handle accordingly
      error = "Email is not registered. Please sign up or use a different email.";
      return null;
    }

    // If the email exists, proceed with the sign-in
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error = null;
    console.log(res.user);

    return res;
  } catch (err) {
    error = err.message;
    console.error("Sign-in error:", error);
    return null;
  }
};

const userLogin = () => {
  return { error, login };
};

export default userLogin;
 

 */