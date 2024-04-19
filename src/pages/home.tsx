import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import ClickCounter from '../pages/ClickCounter';
import Calculator from '../pages/Calculator';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-sm="6" offset-sm="3">
              {/* Click Counter Card */}
              <IonRouterLink href="/ClickCounter">
                <IonCard button>
                  <IonCardHeader>
                    <IonCardTitle>Click Counter</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonRouterLink>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-sm="6" offset-sm="3">
              {/* Calculator Card */}
              <IonRouterLink href="/Calculator">
                <IonCard button>
                  <IonCardHeader>
                    <IonCardTitle>Calculator</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonRouterLink>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-sm="6" offset-sm="3">
              {/* Todo Lis Card */}
              <IonRouterLink href="/TodoList">
                <IonCard button>
                  <IonCardHeader>
                    <IonCardTitle>Todo List</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Home;
