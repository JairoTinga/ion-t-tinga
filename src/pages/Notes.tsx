import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, IonCheckbox, IonRow, IonGrid, IonCol, IonInput, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { trashOutline, createOutline } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  const history = useHistory();

  const navigateBack = () =>
    history.goBack();

  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean; }[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          text: newTodoText,
          completed: false
        }
      ]);
      setNewTodoText('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
          <IonRow>
            <IonCol size="12" size-sm="6" offset-sm="3">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => toggleTodo(todo.id)} />
              <IonLabel>{todo.text}</IonLabel>
              <div className="ion-text-end">
                <IonButton fill="clear" onClick={() => editTodo(todo.id, prompt("Edit Note:", todo.text))}>
                  <IonIcon icon={createOutline} />
                </IonButton>
                <IonButton fill="clear" onClick={() => deleteTodo(todo.id)}>
                  <IonIcon icon={trashOutline} />
                </IonButton>
              </div>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            placeholder="Enter a Note"
            value={newTodoText}
            onIonChange={(e) => setNewTodoText(e.detail.value!)}
          />
          <IonButton expand="block" onClick={addTodo}>Add Note</IonButton>
        </IonItem>
        </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
      <IonButton color="danger" onClick={navigateBack}>Back</IonButton>
    </IonPage>
  );
};

export default Tab2;
