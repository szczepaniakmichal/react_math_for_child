import Div from 'styled-kit/Div';

import './App.css';
import Button from "./components/Button";


function App() {
  return (
    <>
      <h1>math for child</h1>
        <Div listLeft={10}>
            <Button label='generate task'
                    isBolder
            />
            <Button label='check task'
            />
        </Div>
    </>
  );
}

export default App;
