import logo from './logo.svg';
import './App.css';
import About from './About/About';
import Ed from './educational details/Ed';
import { TabView, TabPanel } from 'primereact/tabview';
import Personal from './Personal.js/Persona';
function App() {
  return (
    <div className='card'>
      <TabView>
     <TabPanel header="About"><About /></TabPanel>
     <TabPanel header="Educational Details"><Ed/></TabPanel>
     <TabPanel header="Personal Details"><Personal/></TabPanel>
    </TabView>
    </div>
   
  );
}

export default App;
