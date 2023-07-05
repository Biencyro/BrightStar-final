

import './App.css';
import { Route, Routes} from 'react-router-dom';
 import Home from './pages/Home';
import Authentication from './pages/Authentication';
 //import Error from './pages/Error';
 //<Route path='*' element={<Error/>} />
 import Homepage from './pages/Homepage';
import PrivateRouteLayout from './layouts/PrivateRouteLayout';

import Lesson1 from './course-lessons/Lesson1';
import Lesson2 from './course-lessons/Lesson2';
//import Navbar from './components/Navbar';
import Assignment1 from './course-lessons/Assignments/Assignment1';



function App() {
  return (

    <>
 

 

 <Routes>

  
  {/* public pages */}
  <Route path= '/' element={<Home/>} />
  <Route path='/authentication' element ={<Authentication/>}/>
  <Route path='/homepage' element = {<Homepage/>}/>
 
  <Route path='/lesson1' element = {<Lesson1/>}/>
  <Route path='/assignment1' element = {<Assignment1/>}/>
    
   {/* private pages */}
   <Route element = {<PrivateRouteLayout/>}>  
  <Route path='/lessonjhhcyudfgt8wvy' element = {<Lesson2/>}/>
  </Route>
 </Routes>

 </>

  )
 }

 export default App;
