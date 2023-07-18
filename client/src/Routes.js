import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './startPage';  
import MainPage from './mainPage';
import PersonalDetails from '../src/containers/upload/PersonalDetails';
import CompanyDetails from '../src/containers/upload/CompanyDetails';
import AdditionalDetails from '../src/containers/upload/AdditionalDetails';
import Success from '../src/containers/upload/Success';
import Chat from '../src/containers/upload/Chat';

const RoutesComponent = () =>  {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/start" element={<StartPage />} /> 
                <Route path="/start/resume" element={<PersonalDetails />} />
                <Route path="/start/company" element={<CompanyDetails />} />
                <Route path="/start/additional" element={<AdditionalDetails />} />
                <Route path="/start/coverletter" element={<Success />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    )
}

export default RoutesComponent; 
