import React from 'react';
import './App.css';
import  Header from './Component/Header'
import Footer from './Component/Footer'
import BasicTextFields from './Component/TextField'
class App extends React.Component {
  render() {
    // let todos=[{name:"abdul moiz"},{name:"zafar ali"},{surName: "khanzada"}];
    return(
      <div>
        <Header/>
        <h1 style={{color: "red" , fontStyle: "italic"}}>This is main component</h1>
        <button type="button" className="btn btn-primary">Primary</button>

        <Footer/>
        <BasicTextFields/>
        {/* Javascript ko render karwana ka liyee hum {} lagwatee ha  */}
        {/* <ul>
      {todos.map((item,index) =>{
        return(
        <li key={index}>{item.name} 
        {item.surName}</li>
        )
        
      })}
      </ul> */}
      </div>
    );
  }
}


// function App () {
//   return(
//     <div>
//       <h1>hello moiz</h1>
//     </div>
//   )
// }

export default App;