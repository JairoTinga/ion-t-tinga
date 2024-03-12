import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
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

        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/profile.png" />
      <IonCardHeader>
        <IonCardTitle>Jairo</IonCardTitle>
        <IonCardSubtitle>pee pee poo poo</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>wowsers, BATCHEST</IonCardContent>

      <IonButton color="success" id="present-alert" expand="full" >A Button :D</IonButton>
      <IonAlert
        trigger="present-alert"
        header="forsenBAJS"
        subHeader="forsen"
        message="i have pipebombs on your mailbox"
        buttons={['Back']}
      ></IonAlert>

      <IonButton color="warning" fill="outline" id="open-action-sheet" expand="full" >Action</IonButton>
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

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
