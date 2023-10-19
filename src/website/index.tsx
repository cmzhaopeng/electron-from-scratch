import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.scss';
import {
  Emphasis,
  Centered,
  Button,
  GrayBox,
  FormField,
  TextInput
} from './components';
// We find our app DOM element as before
const app = document.getElementById('app');



// You can see how we can mix html and nested components together
const App: React.FC = () => (
  <>
    <Centered>
    <GrayBox>
      <div>
      <p style={{ width: "600px" }}>
        Hello, <Emphasis>world</Emphasis>
      </p>
      <Button primary onClick={() => alert("Ok!")}>
        OK
      </Button>
      </div>
    </GrayBox>
  </Centered>
  </>
);

// Finally, we render our top-level component to the actual DOM.
ReactDOM.render(<App />, app);