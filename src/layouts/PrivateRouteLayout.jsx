

 import {Outlet, useLocation, Navigate} from "react-router-dom";
 import {projectAuth} from "../firebase/config";

  const PrivateRouteLayout = () => {
    const location = useLocation();

   return projectAuth.currentUser ? (<Outlet/>) : (
      <Navigate to= "/authentication" state ={{from: location}} 
      replace/>
      );
  };

  export default PrivateRouteLayout;


 






/*import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";

const PrivateRouteLayout = () => {
  const location = useLocation();
  const [userEmail, setUserEmail] = useState(null);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    // Check if there is a logged-in user
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
        setUserExists(false);
      }
    });

    // Cleanup the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Check if the user exists in the Firebase database based on their email
    if (userEmail) {
      const userRef = projectFirestore.collection("users").where("email", "==", userEmail);

      userRef.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {
          setUserExists(true);
        } else {
          setUserExists(false);
        }
      });
    }
  }, [userEmail]);

  return userEmail && userExists ? (
    <Outlet />
  ) : (
    <Navigate to="/authentication" state={{ from: location }} replace />
  );
};

export default PrivateRouteLayout;
*/


