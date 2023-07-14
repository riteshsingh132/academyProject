import { RouterProvider } from "react-router";



import Mainproj5 from "./project5/Mainproj5";


import { UserProvider } from "./project5/context/UserContext";




function App() {

  
  return (

<div>
  
    <UserProvider>
    <Mainproj5/>
    </UserProvider>
    {/* <Main/> */}
    </div>
  );
}

export default App;
