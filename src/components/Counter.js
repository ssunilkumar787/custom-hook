import useCounter from "./useCounter";

const Counter = () => {
  const [count, HandleIncrement, HandleDecrement] = useCounter();
  return (
    <>
      <div>
        <h2>Counter: {count} </h2>
        <button onClick={HandleIncrement}>Increment</button>
        <button onClick={HandleDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
