import React,{ Component } from 'react';

class App extends Component {
 constructor (props) {
   super (props);
   this.state= {
     isLoaded:false,
     item:[]
   }
 }
 componentDidMount(){
   fetch("https://api.chucknorris.io/jokes/random")
   .then(res => res.json())
   .then(json => {
     this.setState({
       isLoaded:true,
       items:json,
     });
   });
 }

 render(){

  var {isLoaded,items }= this.state
  if (!isLoaded) {
    return<div>Loading...</div>;
  }
  else{
   return (
     <div className="App">
      Chuck Norris is credited for carrying Hannibal's elephants across the Alps
     </div>

   );
 }
}
}

export default App;