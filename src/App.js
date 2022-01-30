import Div from 'styled-kit/Div';

import 'App.css';
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import InputMathOperators from "components/InputMathOperators/InputMathOperators";


function App() {
  return (
    <Div padding={20} column>
        <Div column>
            <InputField title="how many tasks?" />
            <InputField title="how many values to calculate?" />
            <InputField title="maximum single value?"/>
        </Div>
        <Div column>
            <p>Type of mathematical operations:</p>
            <InputMathOperators type='addition' value='+'/>
            <InputMathOperators type='subtraction' value='-'/>
            <InputMathOperators type='multiplication' value='*'/>
            <InputMathOperators type='division' value='/'/>
        </Div>
        <Div column>
            <Button label='generate task'
                    isBolder
            />
            <Button label='check task'
            />
        </Div>
    </Div>
  );
}

export default App;
