import React from 'react';
import Form from '../components/global/FormGroup'
import styled from 'styled-components'
const Wrapper = styled.div`

margin:5rem

`

const FormTest = () => <Wrapper>
  
  <Form
    fieldStyle='shortText'
    inputType='text'
    name='Name'
    placeholder='Your Name'
    showError
  />

</Wrapper>

export default FormTest;