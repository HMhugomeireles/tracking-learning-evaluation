import FormGenerator from './components/form-generator/FormGenerator'
import FormGenOnUserInteractions from './components/form-gen-on-user-interactions/FormGenOnUserInteractions';
import './App.css';

import { mockFormGeneratorData } from './mocks/form-generator'

function App() {
  return (
    <div className="App">
      {/* <FormGenerator 
        formConfigs={mockFormGeneratorData}
      /> */}

      <FormGenOnUserInteractions 
        flows={[]}
        initialConfig={[]}
      />
    </div>
  );
}

export default App;
