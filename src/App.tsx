import "./App.css";
import { VirtualizedList } from "virtualized-react";

function App() {
  const array1 = Array(1000).fill("same item");
  return (
    <div style={{ width: "200px", height: "200px", color: "black" }}>
      <VirtualizedList items={array1} />
    </div>
  );
}

export default App;
