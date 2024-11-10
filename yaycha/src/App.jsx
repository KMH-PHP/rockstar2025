import { useState } from "react";

import { Box, Container } from "@mui/material";
import Item from "./components/Item";
import Form from "./components/Form";
import { useApp } from "./ThemedApp";
import Header from "./components/Header";

const App = () => {
  const { mode, setMode, showForm , setGlobalMsg  } = useApp();
  const [data, setData] = useState([
    { id: 1, content: "Hello world", name: "Alice" },
    { id: 2, content: "React is fun", name: "Bob" },
    { id: 3, content: "Yay, interesting", name: "Chris" },
  ]);


  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    setGlobalMsg("An item deleted");
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    //console.log(id, content, name, "hellow");
    setData([...data, { id, content, name }]);
    setGlobalMsg("An item added");
  };

  return (
    <Box>
      <Header />

      <Container
        maxWidth="sm"
        sx={{ mt: 4 }}
      >
        {showForm && <Form add={add} />}

        {data.map((item) => (
          <Item key={item.id} item={item} remove={remove} />
        ))}
      </Container>
    </Box>
  );
};  

export default App;
