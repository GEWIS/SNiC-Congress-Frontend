import React from 'react';
import './App.css';
import BasicModal from '../components/BasicModal';

function ModalTest() {
  return (
    <BasicModal buttonText="Open Modal!" modalTitle="Wow a modal!" modalText="And here is some beautiful text that we want in our modal!" />
  );
}

export default ModalTest;
