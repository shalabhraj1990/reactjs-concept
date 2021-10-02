import logo from './logo.svg';
import './App.css';
import Example1 from './examples/Example1';
import Example2 from './examples/Example2';
import Example3 from './examples/Example3';
function App() {
  return (
    <div className="App">
      <h5>Example 1 : Hello world</h5>
      <Example1></Example1>
      <hr></hr>
      <h5>Example 2 : Button</h5>
      <Example2></Example2>
      <hr></hr>
      <h5>Example 3 : First React Hook - useState</h5>
      <Example3 />
      <hr></hr>
    </div>
  );
}

export default App;
