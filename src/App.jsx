import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import DynamicCounter from './components/DynamicCounter';
import HookCounter from './components/HookCounter';
import VariableCounter from './components/VariableCounter';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter title="Static counter" />
        <DynamicCounter title="Dynamic counter" />
        <VariableCounter dynamic={true} title="Variable counter" />
        <HookCounter title="Hook counter" />
      </Provider>
    </div>
  );
}

export default App;
