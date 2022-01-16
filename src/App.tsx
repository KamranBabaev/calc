import React from 'react';
import {Calc} from "./containers/calc/components/calc";
import {WrapperCalc} from './containers/calc/components/calc.styled';

function App() {
  return (
      <div className="App">
        <WrapperCalc>
          <Calc/>
        </WrapperCalc>
      </div>
  );
}

export default App;
