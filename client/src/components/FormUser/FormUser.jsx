import React, { useEffect, useState } from 'react';
import { Message, Button, Form } from 'semantic-ui-react';
import axios from 'axios';

const FormUser = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formClassName, setFormClassName] = useState('');
  const [formSuccessMessage, setFormSuccessMessage] = useState('');
  const [formErrorMessage, setFormErrorMessage] = useState('');

  useEffect(() => {
    // Fill in the form with the appropriate data if user id is provided
    if (props.userID) {
      axios.get(`${props.server}/api/users/${props.userID}`)
        .then((response) => {
          setName(response.data.name);
          setEmail(response.data.email);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (name === 'name') {
      setName(value);
    } else {
      setEmail(value);
    }
  }

  const handleSubmit = async (e) => {
    // Prevent browser refresh
    e.preventDefault();

    const user = {
      name: name,
      email: email
    }

    // Acknowledge that if the user id is provided, we're updating via PUT
    // Otherwise, we're creating a new data via POST
    const method = props.userID ? 'put' : 'post';
    const params = props.userID ? props.userID : '';
    axios({
      method: method,
      responseType: 'json',
      url: `${props.server}/api/users/${params}`,
      data: user
    }).then((response) => {
      setFormClassName('success');
      setFormSuccessMessage(response.data.msg);
      if (!props.userID) {
        setName('');
        setEmail('');
        props.onUserAdded(response.data.result);
      }
      else {
        props.onUserUpdated(response.data.result);
      }
    }).catch((err) => {
      if (err.response) {
        if (err.response.data) {
          setFormClassName('warning');
          setFormErrorMessage(err.response.data.msg);
        }
      }
      else {
        console.log(err);
        setFormClassName('warning');
        setFormErrorMessage('Something went wrong. ' + err);
      }
    });
  }

  return (
    <Form className={formClassName} onSubmit={handleSubmit}>
      <Form.Input
        label='Name'
        type='text'
        placeholder='Elon Musk'
        name='name'
        maxLength='40'
        required
        value={name}
        onChange={handleInputChange}
      />
      <Form.Input
        label='Email'
        type='email'
        placeholder='elonmusk@tesla.com'
        name='email'
        maxLength='40'
        required
        value={email}
        onChange={handleInputChange}
      />
      <Message
        success
        color='green'
        header='Nice one!'
        content={formSuccessMessage}
      />
      <Message
        warning
        color='yellow'
        header='Woah!'
        content={formErrorMessage}
      />
      <Button color={props.buttonColor} floated='right'>{props.buttonSubmitTitle}</Button>
      <br /><br /> {/* Yikes! Deal with Semantic UI React! */}
    </Form>
  );
}

export default FormUser;
