// import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import {connect,sendMsg} from "./api";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';



class App extends Component{

  send(event){
    if(event.keyCode===13){
      if(event.target.value!=""&&event.target.value!=" ")
      {
      sendMsg(event.target.value)
      event.target.value="";
      }
      event.target.value="";
    }
  }

render(){
  return(
    <div className="App">
      <Header />
      <ChatHistory chatHistory={this.state.chatHistory}/>
      <ChatInput send={this.send}/>
    </div>
  )
}
  constructor(props){
    super(props);
    this.state={
      chatHistory:[]
    }
  }

  componentDidMount(){
    connect((msg) =>{
      console.log("New Message")
      this.setState(prevState =>({
        chatHistory:[...this.state.chatHistory,msg]
      }))

      console.log(this.state);
    })
  }

}




export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }