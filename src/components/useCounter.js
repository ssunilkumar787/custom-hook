import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const HandleIncrement = () => {
    setCount(count + 1);
  };
  const HandleDecrement = () => {
    setCount(count - 1);
  };

  return [count, HandleIncrement, HandleDecrement];
};

export default useCounter;
