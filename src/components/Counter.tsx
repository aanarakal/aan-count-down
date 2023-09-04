import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Counter() {
  const [counterVal, setCouterVal] = useState(0);

  const onValueChange = (flag: boolean) => {
    let val: number = flag ? counterVal + 1 : counterVal - 1;
    setCouterVal(val);
  };
  return (
    <div>
      <h3> This is Counter</h3>
      <h1>{counterVal}</h1>

      <Button variant="success" onClick={() => onValueChange(true)}>
        Increment
      </Button>
      <Button variant="danger" onClick={() => onValueChange(false)}>
        Decrement
      </Button>
    </div>
  );
}
