import "./styles.css";
import Counter from "./components/Counter";
import useUpperCase from "./components/useUpperCase";

export default function App() {
  const [upperCase, setUpperCase] = useUpperCase("hello");
  return (
    <div className="App">
      <Counter />
      {upperCase}
    </div>
  );
}
