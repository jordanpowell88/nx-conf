import { useState } from 'react';
import Bread from './bread/bread';
import Jelly, { JellyFlavor } from './jelly/jelly';
import Menu from './menu/menu';
import PeanutButter, { PeanutButterType } from './peanut-butter/peanut-butter';

function Sandwhich() {
  const [flavor, setFlavor] = useState<JellyFlavor>();
  const [type, setType] = useState<PeanutButterType>();
  const [extra, setExtra] = useState<boolean>();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Menu
        peanutButterChange={setType}
        jellyChange={setFlavor}
        extraChange={setExtra}
      />
      {flavor && type ? (
        <div>
          <Bread />
          <PeanutButter type={type} extra={extra} />
          <Jelly flavor={flavor} extra={extra} />
          <Bread />
        </div>
      ) : (
        <p>Waiting on sandwhich order...</p>
      )}
    </>
  );
}

export function App() {
  return <Sandwhich />;
}

export default App;
