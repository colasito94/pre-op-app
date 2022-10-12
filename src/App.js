import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Views/Homepage";

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
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
