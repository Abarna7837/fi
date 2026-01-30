
import './App.css'
import Course from './course';
import Navbar from './navbar';
import Foo from './foo';
import IT from './assets/IT.jpg';
import AI from './assets/AI.jpg';
import ML from './assets/ML.jpg';

function App() {
  

  return (
    <>
   
    <Course title ="IT" price = "₹10,000" image = {IT}/>
    <Course title ="AI" price = "₹12,000" image = {AI}/>
    <Course title ="ML" price = "₹15,000" image = {ML}/>
    
    </>
    );
}

export default App
