import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';

import { Home } from './components/Home';
import { Navbar } from './components/layout/Navbar';
import { Doctor } from './components/Doctor/Doctor';
import { Patient } from './components/Patient';
import { AddDoctor } from './components/Doctor/AddDoctor';
import { EditDoctor } from './components/Doctor/EditDoctor';
import { AddPatient } from './components/Patient/AddPatient';

function App() {
  return (
    <Router>
      <div>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/DoctorList" component={Doctor}/>
         <Route exact path="/AddDoctor" component={AddDoctor}/>
         <Route exact path="/EditDoctor/:id" component={EditDoctor}/>

         <Route exact path="/AddPatient" component={AddPatient}/>
         <Route exact path="/PatientList" component={Patient}/>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
