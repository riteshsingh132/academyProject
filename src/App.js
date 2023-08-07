import { RouterProvider } from "react-router";



import Mainproj5 from "./project5/Mainproj5";


import { UserProvider } from "./project5/context/UserContext";
import AuthSignUp from "./project5/AuthSignUp";
import AuthLogin from "./project5/AuthLogin";




function App() {

  
  return (

<div>
  {/* <AuthSignUp/>
  <AuthLogin/> */}
    <UserProvider>
    <Mainproj5/>
    </UserProvider>
    {/* <Main/> */}
    </div>
  );
}

export default App;
