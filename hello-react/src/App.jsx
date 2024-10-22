import Item from "./Item"
import List from "./List"
import Button from "./Button";

const App = () => {
  return (
    <div>
      <List>
        <Item name="apple" price="0.99" />
        <Item name="orange" price="0.99" />
        <Button />
      </List>
    </div>
  );
}

export default App