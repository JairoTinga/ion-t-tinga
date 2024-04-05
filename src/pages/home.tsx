import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

// CSS
//import './profile.css';
  
  const Home: React.FC = () => {
    return (
      <IonPage>
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
          <IonCardHeader>
      </IonCardHeader>
      <IonCardHeader>
      </IonCardHeader>
      <IonCardHeader>
      </IonCardHeader><IonCardHeader>
      </IonCardHeader><IonCardHeader>
      </IonCardHeader>
      <IonCardHeader>
      </IonCardHeader>
      <IonCardHeader>
      </IonCardHeader>
          <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/walterwhite.gif" />
      </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  //
  export default Home;
  