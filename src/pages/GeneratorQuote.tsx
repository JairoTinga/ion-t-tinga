import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonThumbnail
} from '@ionic/react';
import { useHistory } from 'react-router-dom';


//Dynamic data reference
import quoteCard from '../assets/json/quoteCard.json';

const QuotesGenerator: React.FC = () => {

  const history = useHistory();

  const navigateBack = () =>
    history.goBack();

  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] =  useState<number | null>(null); // State to store random index

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * quoteCard.length);
  };

  // Function to generate a random message
  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return quoteCard[randomIndex].message;
    } else {
      return ''; // Return empty string if randomIndex is null
    }
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(0); // Reset the index to 0
    setShowAlert(false); // Hide the alert
  };

  
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quote Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>

          {/*Button Trigger*/}
          <IonGrid>
            <IonRow>
                <IonCol size="" push="">
                <IonButton id="present-alert" color="success" expand="full" onClick={handleOpenAlert}>Click me</IonButton> 
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
                  header="Quote! :D"
                  subHeader=""
                  message={renderRandomMessage()}
                  buttons={['Close']}
                />
                </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>  
      </IonContent>
      <IonButton color="danger" onClick={navigateBack}>Back</IonButton>
    </IonPage>
  );
};

export default  QuotesGenerator;