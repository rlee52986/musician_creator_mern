import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MusicianForm = (props) => {
    return (
      <Form>
        <FormGroup>
          <Label for="firstName">first name</Label>
          <Input type="textArea" name="firstName" id="firstName" placeholder="enter first name" />
        </FormGroup>      
        <FormGroup>
          <Label for="lastName">last name</Label>
          <Input type="textArea" name="lastName" id="lastName" placeholder="enter last name" />
        </FormGroup>  
        <FormGroup>
          <Label for="instrumentPlayed">instrument(s) played</Label>
          <Input type="textArea" name="instrumentPlayed" id="instrumentPlayed" placeholder="enter instrument" />
        </FormGroup>
        <FormGroup>
          <Label for="age">age</Label>
          <Input type="textArea" name="age" id="age" placeholder="enter age" />
        </FormGroup>        
      </Form>
    );
  }

export default MusicianForm;