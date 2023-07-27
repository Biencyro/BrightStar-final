import './index.css'

import { Route, Routes} from 'react-router-dom';
 import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Contact from './pages/Contact';
import PrivateRouteLayout from './layouts/PrivateRouteLayout';
 //import Error from './pages/Error';
 //<Route path='*' element={<Error/>} />
 import Homepage from './pages/Homepage';

// Academic
import Lesson1 from './course-lessons/Academic/Lesson1';
import Lesson2 from './course-lessons/Academic/Lesson2';
import Lesson3 from './course-lessons/Academic/Lesson3';
import Lesson4 from './course-lessons/Academic/Lesson4';
import Lesson5 from './course-lessons/Academic/Lesson5';
import Lesson6 from './course-lessons/Academic/Lesson6';
import Lesson7 from './course-lessons/Academic/Lesson7';
import Lesson8 from './course-lessons/Academic/Lesson8';
import Lesson9 from './course-lessons/Academic/Lesson9';
import Lesson10 from './course-lessons/Academic/Lesson10';

//Article
import Lesson11 from './course-lessons/Article/Lesson11';
import Lesson12 from './course-lessons/Article/Lesson12';
import Lesson13 from './course-lessons/Article/Lesson13';
import Lesson14 from './course-lessons/Article/Lesson14';
import Lesson15 from './course-lessons/Article/Lesson15';
import Lesson16 from './course-lessons/Article/Lesson16';
import Lesson17 from './course-lessons/Article/Lesson17';

//Blog
import Lesson18 from './course-lessons/Blog/Lesson18';
import Lesson19 from './course-lessons/Blog/Lesson19';
import Lesson20 from './course-lessons/Blog/Lesson20';
import Lesson21 from './course-lessons/Blog/Lesson21';
import Lesson22 from './course-lessons/Blog/Lesson22';
import Lesson23 from './course-lessons/Blog/Lesson23';
import Lesson24 from './course-lessons/Blog/Lesson24';

//SEO
import Lesson25 from './course-lessons/SEO/Lesson25';
import Lesson26 from './course-lessons/SEO/Lesson26';
import Lesson27 from './course-lessons/SEO/Lesson27';
import Lesson28 from './course-lessons/SEO/Lesson28';
import Lesson29 from './course-lessons/SEO/Lesson29';
import Lesson30 from './course-lessons/SEO/Lesson30';



import Mpesa from './components/Payment/Mpesa';
import Paypal from './components/Payment/Paypal';

//Assignments
import Assignment1 from './course-lessons/Assignments/Assignment1';
import Assignment2 from './course-lessons/Assignments/Assignment2';
import Assignment3 from './course-lessons/Assignments/Assignment3';









function App() {

  
  
  
  return (

    <div className="App">
      
      

    <>
 

 

 <Routes>

  
  {/* public pages */}
  <Route path= '/' element={<Home/>} />
  <Route path='/authentication' element ={<Authentication/>}/>
  <Route path='/contact' element ={<Contact/>}/>

  <Route path='/homepage' element = {<Homepage/>}/>
  <Route path='/payment1' element = {<Mpesa/>}/>
  <Route path='/payment2' element = {<Paypal/>}/>

  {/*Academic */}
  <Route path='/lesson1' element = {<Lesson1/>}/>
  <Route path='/lessonjhhcyudfgt8wvy' element = {<Lesson2/>}/>


  {/*Article */}
  <Route path='/lesson11' element = {<Lesson11/>}/>
  

  {/*Blog */}
  <Route path='/lesson18' element = {<Lesson18/>}/>
  

  {/*SEO*/}
  <Route path='/lesson25' element = {<Lesson25/>}/>
  

    {/*Assignments*/}
  <Route path='/assignment1' element = {<Assignment1/>}/>
  
  
    



   {/* private pages */}
  <Route element = {<PrivateRouteLayout/>}>


    {/*Academic */}
  <Route path='/lesson3' element = {<Lesson3/>}/>
  <Route path='/lesson4' element = {<Lesson4/>}/>
  <Route path='/lesson5' element = {<Lesson5/>}/>
  <Route path='/lesson6' element = {<Lesson6/>}/>
  <Route path='/lesson7' element = {<Lesson7/>}/>
  <Route path='/lesson8' element = {<Lesson8/>}/>
  <Route path='/lesson9' element = {<Lesson9/>}/>
  <Route path='/lesson10' element = {<Lesson10/>}/>
  
          {/*Assignments*/}
  <Route path='/assignment2' element = {<Assignment2/>}/>
  <Route path='/assignment3' element = {<Assignment3/>}/>





    {/*Article */}
  <Route path='/lesson12' element = {<Lesson12/>}/>
  <Route path='/lesson13' element = {<Lesson13/>}/>
  <Route path='/lesson14' element = {<Lesson14/>}/>
  <Route path='/lesson15' element = {<Lesson15/>}/>
  <Route path='/lesson16' element = {<Lesson16/>}/>
  <Route path='/lesson17' element = {<Lesson17/>}/>


    {/*Blog */}
  <Route path='/lesson19' element = {<Lesson19/>}/>
  <Route path='/lesson20' element = {<Lesson20/>}/>
  <Route path='/lesson21' element = {<Lesson21/>}/>
  <Route path='/lesson22' element = {<Lesson22/>}/>
  <Route path='/lesson23' element = {<Lesson23/>}/>
  <Route path='/lesson24' element = {<Lesson24/>}/>


    {/*SEO*/}
  <Route path='/lesson26' element = {<Lesson26/>}/>
  <Route path='/lesson27' element = {<Lesson27/>}/>
  <Route path='/lesson28' element = {<Lesson28/>}/>
  <Route path='/lesson29' element = {<Lesson29/>}/>
  <Route path='/lesson30' element = {<Lesson30/>}/>

  </Route>

  
  
 </Routes>
 
 </>

 </div>

  )
 }

 export default App;
