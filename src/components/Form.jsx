import React from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kuhfpkf',
        'template_glcdt3z',
        e.target,
        'user_xZG2GDssDD05TPUzSnMNO'
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: '¡Mensaje Enviado con Exito!',
            text: 'Pronto me pondre en contacto contigo',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
    e.target.reset();
  }
  return (
    <>
      <Form className='contact-form' onSubmit={sendEmail}>
        <Form.Group className='col-lg-4'>
          {/* <Form.Label>Nombre(s)</Form.Label> */}
          <Form.Control
            type='text'
            name='Name'
            required
            autoFocus
            pattern='[a-zA-ZÀ-ÿ\s]{1,25}'
            title='Username should only contain lowercase letters. e.g. Juan'
            placeholder='Nombre(s)'
          />
        </Form.Group>

        <Form.Group className='col-lg-4'>
          {/* <Form.Label>Apellidos</Form.Label> */}
          <Form.Control
            type='text'
            name='lastname'
            required
            pattern='[a-zA-ZÀ-ÿ\s]{1,25}'
            title='Username should only contain lowercase letters. e.g. Juan'
            placeholder='Apellidos)'
          />
        </Form.Group>
        <Form.Group className='col-lg-4'>
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control
            type='email'
            name='Email'
            required
            pattern='^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$'
            title='Ingrese una cuenta de correo valida. example@example.com'
            placeholder='Email'
          />
        </Form.Group>
        <Form.Group className='col-lg-4'>
          {/* <Form.Label>Telefono</Form.Label> */}
          <Form.Control
            type='phone'
            name='Phone'
            required
            pattern='[0-9]{10,12}'
            title='Ingrese un numero telefonico valido de 10 digitos.'
            placeholder='Telefono'
          />
        </Form.Group>
        <Form.Group className='col-lg-12'>
          {/* <Form.Label>Mensaje</Form.Label> */}
          <Form.Control
            size='lg'
            type='text'
            as='textarea'
            rows={3}
            name='msg'
            required
            placeholder='Mensaje'
          />
        </Form.Group>

        <Button className='submit-btn' type='submit'>
          Enviar
        </Button>
      </Form>
    </>
  );
}
