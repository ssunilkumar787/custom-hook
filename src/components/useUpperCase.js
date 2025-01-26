import { useState, useEffect } from "react";
const useUpperCase = (str) => {
  const [upperCase, setUpperCase] = useState();

  useEffect(() => {
    setUpperCase(str.toUpperCase());
  }, [upperCase]);

  return [upperCase, setUpperCase];
};

export default useUpperCase;
