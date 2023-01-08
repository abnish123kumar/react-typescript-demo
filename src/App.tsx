

import { useState } from 'react';
import './App.css';



function App() {
   const [user1, setUser1]=useState("");
   const [user2, setUser2]=useState("");

   const[result, setResult] = useState<string[]>([]);

    // function addValues():void{
       
    // }
    

   let connections:{name:string, friends: string[]}[] = [
    {
      name: "sameer",
      friends: ["aayushi", "kamalnath"]
    },
    {
      name: "aayushi",
      friends: ["bhaskar"]
    },
    {
      name: "kamalnath",
      friends: ["shanti"]
    },
    {
      name: "shanti",
      friends: ["bhaskar"]
    }
  ]
   
  function connectionsListToGraph(connections:{name:string, friends: string[]}[]) {
    const Graph:any = {}
 
   
    
    for (let {name, friends} of connections) {
     
      Graph[name] = friends ;
    }
    return Graph
  }
  

  function degreeOfSepration(source:string, target:string) {
  
   // const Graph = newConnection//connectionsListToGraph(connections)
    //console.log(Graph);
    let newConnection :any = {}
    for(let i=0; i<localStorage.length; i++){
      newConnection[localStorage.key(i)||" "]= JSON.parse(localStorage.getItem(localStorage.key(i)||" ")||" ");
   }
   console.log(newConnection);
    //console.log(newConnection);
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
//   const addArray = [{
//     name:`${user1}`,
//     friends : [`${user2}`]           
// }];
  // localStorage.setItem("name",JSON.stringify(addArray) )
  //       //const arr = localStorage.getItem("name");
  //       var newArray = JSON.parse(localStorage.getItem("name") || "");
  //      res= newArray?newArray.map((item:any)=>{
  //           if(item.name=== user1){
  //             item.friends.push(user1);
  //           }
  //       }):newArray.push({name:`${user1}`, friends:[`${user2}`]})

  //      console.log(res); 
  //localStorage.clear();
    if(localStorage.getItem(`${user1}`)){ 
        // for(let i=0; i<localStorage.length; i++){
        //    newConnection[localStorage.key(i)||" "]= JSON.parse(localStorage.getItem(localStorage.key(i)||" ")||" ");
        // }
        // console.log(newConnection);
      console.log("mundhkehdkj")
        let jstion = (JSON.parse(localStorage.getItem(`${user1}`)||" "));
         console.log(jstion);
         console.log(jstion.includes(`${user2}`))
       if(jstion.includes(`${user2}`)){ 
           console.log("hero");
          // jstion.push(`${user2}`)
      localStorage.setItem(`${user1}`,JSON.stringify(jstion))
       }else{
        jstion.push(`${user2}`)
        localStorage.setItem(`${user1}`,JSON.stringify( jstion))
       }
       // localStorage.clear();
      }
       else 
       localStorage.setItem(`${user1}`, JSON.stringify([user2]));

      // localStorage.clear();
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
