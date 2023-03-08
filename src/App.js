import {React, useRef} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {

  const scrollToHome = useRef();
  const scrollToProjects = useRef();
  const scrollToContact = useRef();

  function scrollHome() {
    scrollToHome.current.scrollIntoView()
  }

  function scrollProjects() {
    scrollToProjects.current.scrollIntoView()
  }

  function scrollContact() {
    scrollToContact.current.scrollIntoView()
  }

  return (
    <div className="App">
      <Header
      scrollHome={scrollHome}
      scrollProjects={scrollProjects}
      scrollContact={scrollContact} />
      <Home 
      scrollToHome={scrollToHome}/>
      <Projects 
      scrollToProjects={scrollToProjects}/>
      <Contact 
      scrollToContact={scrollToContact}/>
    </div>
  );
}

export default App;
