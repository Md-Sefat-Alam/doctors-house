import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import OurServices from './components/OurServices/OurServices';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import ShowService from './components/ShowService/ShowService';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Doctor from './components/Doctor/Doctor';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivetRoute path='/services'>
              <OurServices></OurServices>
            </PrivetRoute>
            <PrivetRoute path='/service/:service_detail'>
              <ServiceDetails></ServiceDetails>
            </PrivetRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivetRoute path='/doctor'>
              <Doctor></Doctor>
            </PrivetRoute>
            <Route path='/about-us'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
