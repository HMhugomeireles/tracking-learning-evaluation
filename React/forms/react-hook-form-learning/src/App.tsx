import FormGenerator from './components/form-generator/FormGenerator'
import './App.css';

import { mockFormGeneratorData } from './mocks/form-generator'

function App() {
  return (
    <div className="App">
      <FormGenerator 
        formConfigs={mockFormGeneratorData}
      />
    </div>
  );
}

export default App;
