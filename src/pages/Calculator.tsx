// Tab3.tsx

import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Tab3.css';

const Tab3: React.FC = () => {
  const history = useHistory();

  const navigateBack = () =>
    history.goBack();
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value: string) => {
    setInput(prevInput => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid className="calculator-grid">
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonInput value={input} readonly></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="button-row">
            <IonCol>
              <IonButton onClick={() => handleInput('1')}>1</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('2')}>2</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('3')}>3</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('+')}>+</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="button-row">
            <IonCol>
              <IonButton onClick={() => handleInput('4')}>4</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('5')}>5</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('6')}>6</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('-')}>-</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="button-row">
            <IonCol>
              <IonButton onClick={() => handleInput('7')}>7</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('8')}>8</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('9')}>9</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('*')}>*</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="button-row">
            <IonCol>
              <IonButton onClick={clearInput}>Clear</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('0')}>0</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={calculateResult}>=</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => handleInput('/')}>/</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonInput value={result} readonly></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
      <IonButton color="danger" onClick={navigateBack}>Back</IonButton>
    </IonPage>
  );
};

export default Tab3;
