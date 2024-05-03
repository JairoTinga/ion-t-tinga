import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, personCircleOutline } from 'ionicons/icons';

// Home resources
import Home from './pages/home';
import Profile from './pages/Profile';
import ClickCounter from './pages/ClickCounter';
import Calculator from './pages/Calculator';
import TodoList from './pages/Todolist';
import GeneratorQuote from './pages/GeneratorQuote';
import Notes from './pages/Notes';
import Quote from './pages/Quote';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Application default route */}
          <Route exact path="/ion-t-tinga/">
            <Redirect to="/ion-t-tinga/home" />
          </Route>
          {/* Home Router */}
          <Route exact path="/ion-t-tinga/home">
            <Home />
          </Route>
          <Route exact path="/ion-t-tinga/profile">
            <Profile />
          </Route>
          <Route exact path="/clickcounter">
            <ClickCounter />
          </Route>
          <Route exact path="/calculator">
            <Calculator />
          </Route>
          <Route exact path="/todolist">
            <TodoList />
          </Route>
          <Route exact path="/generatorquote">
            <GeneratorQuote />
          </Route>
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route exact path="/quote">
            <Quote />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Home Tab Button */}
          <IonTabButton tab="home" href="/ion-t-tinga/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          {/* Placeholder for a blank tab */}
          <IonTabButton tab="" href="">
            <IonIcon aria-hidden="true" />
            <IonLabel></IonLabel>
          </IonTabButton>

          {/* Profile Tab Button */}
          <IonTabButton tab="profile" href="/ion-t-tinga/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
