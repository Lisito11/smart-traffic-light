import React from 'react';
import imagen from './img/buttons_Presionado.png';
import imagen2 from './img/buttons_encendido.png';
import './App.css';

// function Buttons(props){
//   return(
//     <div id="Style"> {props.mytext} </div>

//   )
// } 

class Buttons extends React.Component{

  state ={
    show: true
  }

  render(){
    if (this.state.show) {
      return(
        <div id="Style"> {this.props.mytext} 
        <button onClick={() => this.setState({show: false})}><img src={imagen} alt="buttons_Presionado"/></button>
        </div>
      )
    }else{
      return <div id="Style">
        <button onClick={() => this.setState({show: true})}><img src={imagen2} alt="buttons_encendido.png"/> </button>
      </div>
              
         
    }
    
  }
}

function App() {
  return (
    <div id="Style">
      <h1 id="titulo"> Smart-Traffic-Light:  </h1>  
      <Buttons/>  
      </div>
  );
}

export default App;
