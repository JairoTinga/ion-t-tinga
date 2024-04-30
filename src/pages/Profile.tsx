import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonAlert, IonActionSheet } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Profile.css';

const Profile: React.FC = () => {
  const history = useHistory();

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
        <IonCard>
          <img alt="Silhouette of mountains" src="../src/assets/img/quincy.jpg" />
          <IonCardHeader>
            <IonCardTitle>Jairo</IonCardTitle>
            <IonCardSubtitle>pee pee poo poo</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>wowsers, BATCHEST</IonCardContent>

          <IonButton color="success" id="present-alert" expand="full">A Button :D</IonButton>
          <IonAlert
            trigger="present-alert"
            header="forsenBAJS"
            subHeader="forsen"
            message="i have pipebombs on your mailbox"
            buttons={['Back']}
          ><img alt="Silhouette of mountains" src="../src/assets/img/profile.png" /></IonAlert>

          <IonButton color="warning" fill="outline" id="open-action-sheet" expand="full">Action</IonButton>
          <IonActionSheet
            trigger="open-action-sheet"
            header="Actions"
            buttons={[
              {
                text: 'Delete',
                role: 'destructive',
                data: {
                  action: 'delete',
                },
              },
              {
                text: 'Share',
                data: {
                  action: 'share',
                },
              },
              {
                text: 'Cancel',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ]}
          ></IonActionSheet>

          
        </IonCard>
            </div>
      </IonContent>
      <IonButton color="danger" onClick={navigateBack}>Back</IonButton>
    </IonPage>
  );
};

export default Profile;
