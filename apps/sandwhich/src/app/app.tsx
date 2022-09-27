import { useState } from 'react';
import Bread from "./bread/bread";
import Jelly, { JellyFlavor } from "./jelly/jelly";
import PeanutButter, { PeanutButterType } from "./peanut-butter/peanut-butter";

export function App() {
  const [flavor, setFlavor] = useState<JellyFlavor>('grape')
  const [type, setType] = useState<PeanutButterType>('crunchy')

  return (
    <>
      <Bread />
      <PeanutButter type={type} />
      <Jelly flavor={flavor} />
      <Bread />
    </>
  );
}

export default App;
