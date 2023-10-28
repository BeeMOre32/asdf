import React from "react";

interface Props {
  initialCount?: number;
}

export default function Counter({ initialCount = 0 }: Props) {
  const [number, setNumber] = React.useState(initialCount);
  const increment = () => setNumber((prev) => prev + 1);
  const decrement = () => setNumber((prev) => prev - 1);
  const reset = () => setNumber(initialCount);

  return (
    <div>
      <span role="count">{number}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
