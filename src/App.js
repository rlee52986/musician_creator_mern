import { Component } from 'react';
import Navigation from './UIComponents/NavbarComponent';
import MusicianForm from './UIComponents/FormComponent';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">        
        <Navigation />
        <MusicianForm />
        <Button id="create" style={{width: '15%'}}>Create</Button>{' '}
        <Button id="delete" style={{width: '15%'}}>Delete</Button>
      </div>
    )
  }
}

export default App;
