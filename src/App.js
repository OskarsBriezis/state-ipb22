import Counter from "./Counter";
import Hello from "./Hello";
import Check from "./Check";
import LabeledCheck from "./labelCheck";

function App() {
  const names = ["Mini P.E.K.K.A", "Mini P.E.K.K.A", "Mini P.E.K.K.A"];
  const checkk = [true, true, false];
  const namesJSX = names.map((name, index) => {
    return <Hello key={index} default={name} />
  })
  const checkkJSX = checkk.map((chec, indexx) => {
    return <Check key={indexx} default={chec} />
  })
  return (
    <>
    <Counter />
    {namesJSX}
    {checkkJSX}
    </>
  );
}

export default App;