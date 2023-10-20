import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const names = ["Oskars", "Janis", "Garfilds"];
  const namesJSX = names.map((name, index) => {
    return <Hello key={index} default={name} />
  })
  return (
    <>
    <Counter />
    {namesJSX}
    </>
  );
}

export default App;