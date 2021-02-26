import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { CohortDetail } from './pages/CohortDetail';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer';
import { Login } from './pages/Admin/Login';
import { Dashboard } from './components/Dashboard';
import { Upload } from './components/Dashboard/Upload';
import { ViewAllLead } from './components/Dashboard/ViewAllLead';
import { RequestListing } from './pages/RequestListing';
import { FeaturedPage } from './pages/FeaturedPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/find" component={Search} />

                <Route exact path="/featured" component={FeaturedPage} />


                <Route exact path="/cohort/:id" component={CohortDetail}  />

                <Route exact path="/admin/login" component={Login} />

                <Route exact path="/dash" component={Dashboard} />

                {/** Dashboards routes */}
                <Route exact path="/dashboard/upload" component={Upload} />

                <Route exact path="/dashboard/leads" component={ViewAllLead} />

                <Route exact path="/request-listing" component={RequestListing} />


            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
