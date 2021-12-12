import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
// pages import section 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';

// variables
let name = 'This is header by umesh sahani';
let marks = 80;

function App() {
    return <>
        <Header title={name}/>

        <Router>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;
            <Link to="/contact">Contact</Link>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}>
                    
                </Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
        </Router>

        <Footer marks={marks}/>
    </>;
}

export default App;