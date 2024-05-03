import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
  IonSearchbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Sample data for cards
const cardData = [
  { title: 'Click Counter', route: '/ion-t-tinga/ClickCounter' },
  { title: 'Calculator', route: '/Calculator' },
  { title: 'TodoList', route: '/TodoList' },
  { title: 'Quote Generator', route: '/GeneratorQuote' },
  { title: 'Notes', route: '/Notes '},
  { title: 'Quote Firebase', route: '/Quote '}
];

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredCards, setFilteredCards] = useState<any[]>(cardData);

  // Filter cards based on search term
  const filterCards = (term: string) => {
    const filtered = cardData.filter(card =>
      card.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCards(filtered);
  };

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
        <IonSearchbar
          value={searchTerm}
          onIonChange={(e) => filterCards(e.detail.value ?? '')}
        />
        <IonGrid>
          {filteredCards.map((card, index) => (
            <IonRow key={index}>
              <IonCol size="12" size-sm="6" offset-sm="3">
                <IonRouterLink href={card.route}>
                  <IonCard button>
                    <IonCardHeader className="ion-text-center">
                      <IonCardTitle>{card.title}</IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
