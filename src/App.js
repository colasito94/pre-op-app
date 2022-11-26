import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Views/Homepage";
import CancelAppointment from "./Views/CancelAppointment";
import ConfirmCancellation from "./Views/ConfirmCancellation";
import CancellationConfirmed from "./Views/CancellationConfirmed";
import ConfirmAppointment from "./Views/ConfirmAppointment";
import EnterInformation from "./Views/EnterInformation";
import ConfirmInformation from "./Views/ConfirmInformation";
import AppointmentConfirmed from "./Views/AppointmentConfirmed";
import FAQ from "./Views/FAQ";
import ContactUs from "./Views/ContactUs";
import RNLogin from "./Views/RNLogin";
import PatientLogin from "./Views/PatientLogin";
import PatientOverview from "./Views/PatientOverview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact
                   element={<HomePage />}
            />
            {/*Cancellation*/}
            <Route path="/CancelAppointment" exact
                   element={<CancelAppointment />}
            />
            <Route path="/ConfirmCancellation" exact
                   element={<ConfirmCancellation />}
            />
            <Route path="/CancellationConfirmed" exact
                   element={<CancellationConfirmed />}
            />
            {/*Confirmation*/}
            <Route path="/ConfirmAppointment" exact
                   element={<ConfirmAppointment />}
            />
            <Route path="/EnterInformation" exact
                   element={<EnterInformation />}
            />
            <Route path="/ConfirmInformation" exact
                   element={<ConfirmInformation />}
            />
            <Route path="/AppointmentConfirmed" exact
                   element={<AppointmentConfirmed />}
            />
            {/*FAQ*/}
            <Route path="/FAQ" exact
                   element={<FAQ />}
            />
            <Route path="/ContactUs" exact
                   element={<ContactUs />}
            />
            {/*RN and Patient Login*/}
            <Route path="/RNLogin" exact
                   element={<RNLogin />}
            />
            <Route path="/PatientLogin" exact
                   element={<PatientLogin />}
            />
            <Route path="/PatientOverview" exact
                   element={<PatientOverview />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
