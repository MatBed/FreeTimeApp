import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Shared/Header';
import Navigation from './Shared/Navigation';
import Page from './Shared/Page';
import Footer from './Shared/Footer';

class App extends Component {
    state = {}
    render() {
        return (
            <Router>
                <div>
                    <header>
                        {<Header />}
                    </header>
                    <main>
                        <aside>
                            {<Navigation />}
                        </aside>
                        <aside>
                            {<Page />}
                        </aside>
                    </main>
                    <footer>
                        {<Footer />}
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
