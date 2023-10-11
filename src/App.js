import logo from './logo.svg';
import './App.css';
import About from './About/About';
import Ed from './educational details/Ed';
import { TabView, TabPanel } from 'primereact/tabview';
import Personal from './personal/Personal';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  let img1 = "public\site assets\background image.jpeg";
  return (
    <>
    <div className='card-background'>

    
    <div className='card'>

      <TabView>
    
     <TabPanel header="About" headerClassName='Tabcss'><About /></TabPanel>
     <TabPanel header="Educational Details" headerClassName='Tabcss'><Ed/></TabPanel>
     <TabPanel header="Personal Details" headerClassName='Tabcss'><Personal/></TabPanel>
     </TabView>
    </div>
    </div>
   </>
  );
}

export default App;
