

import { useState } from 'react';
import './App.css';



function App() {
   const [user1, setUser1]=useState("");
   const [user2, setUser2]=useState("");

   const[result, setResult] = useState<string[]>([]);

    

   
   
 

  function degreeOfSepration(source:string, target:string) {
  
    let newConnection :any = {}
    for(let i=0; i<localStorage.length; i++){
      newConnection[localStorage.key(i)||" "]= JSON.parse(localStorage.getItem(localStorage.key(i)||" ")||" ");
   }
   console.log(newConnection);
    
    const connectionPaths:string[] = []
  
    function findConnections(source:string, target:string, path:any = [source], visited:any = {}) {
     
      if (visited[source]) return; 
  
  
      visited[source] = true; 
  
      for (let friend of newConnection[source]) {
        if (friend === target) {
          connectionPaths.push(path.concat(">"+target));
        } else {
          findConnections(friend, target, path.concat(">"+friend), visited)
        }
      }
    }
    findConnections(source, target);
    setResult(connectionPaths);
    return connectionPaths;
  }
   
 
 const addValues = ()=>{

    if(localStorage.getItem(`${user1}`)){ 
        
      console.log("mundhkehdkj")
        let jstion = (JSON.parse(localStorage.getItem(`${user1}`)||" "));
         console.log(jstion);
         console.log(jstion.includes(`${user2}`))
       if(jstion.includes(`${user2}`)){ 
           console.log("hero");
         
      localStorage.setItem(`${user1}`,JSON.stringify(jstion))
       }else{
        jstion.push(`${user2}`)
        localStorage.setItem(`${user1}`,JSON.stringify( jstion))
       }
       
      }
       else 
       localStorage.setItem(`${user1}`, JSON.stringify([user2]));

      
 }

  return (
    <div className="App">
      <h1>Abnish Kumar</h1>
     <div className='boxes'>
      <label >User1 : </label>
      <input type="text" value={user1} onChange={(e)=>setUser1(e.target.value)} /> <br></br></div>
     <div className='boxes'>
      <label >RelationShip : </label>

      <select>
        <option>Friend</option>
      </select><br></br></div>
     <div className='boxes'>
      <label >User2 : </label>
      <input type="text" value={user2} onChange={(e)=>setUser2(e.target.value)}/><br></br></div><div>
      <button onClick={()=>addValues()}>Add</button></div>
      <br></br><div>
      <button onClick={()=>degreeOfSepration(user1, user2)}>Degree Of Seperation</button>
      </div>
     <div className='boxes'>
       { result}
      </div>
    </div>
  );
}

export default App;
