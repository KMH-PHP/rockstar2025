import { useState } from "react";
import Item from "./Item";
import List from "./List";
import Form from "./Form";

const App = () => {
  const [data, setData] = useState([
    {id: 1, content:"Hello world", name: "Alice"},
    {id: 2, content:"React is fun", name: "Bob"},
    {id: 3, content:"Yay, interesting", name: "Chris"},
  ]);

  const remove = id => {
    setData(data.filter((item) => item.id !== id ))
  }

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    console.log(id, content, name, "hellow");
    setData([...data,{id, content, name}]);
    
  }

  return (
    <div style={{ maxWidth: 600, margin:" 20px auto "}}>
      <h1>Yaycha</h1>
      <Form add={add}/>
      <List>
        {data.map((item) => <Item key={item.id} item={item} remove={remove} />)}
      </List>
    </div>
  );  
}

export default App