//import FormGenerator from './components/form-generator/FormGenerator'
import FormGenOnUserInteractions from './components/form-gen-on-user-interactions/FormGenOnUserInteractions';
import './App.css';

//import { mockFormGeneratorData } from './mocks/form-generator'
import { MockFormGeneratorOnFly } from './mocks/form-gen-on-fly'

function App() {
  return (
    <div className="App">
      {/* <FormGenerator 
        formConfigs={mockFormGeneratorData}
      /> */}

      <FormGenOnUserInteractions 
        initialConfig={MockFormGeneratorOnFly.initialConfig}
        flows={MockFormGeneratorOnFly.flows}
      />
    </div>
  );
}

export default App;
