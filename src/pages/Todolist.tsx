import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, IonInput, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Tab2.css';

const TodoList: React.FC = () => {
    const history = useHistory();

  const navigateBack = () =>
    history.goBack();
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-sm="6" offset-sm="3">
        <IonList>
          {tasks.map((task, index) => (
            <IonItem key={index}>
              <IonLabel>{task}</IonLabel>
              <IonButton color="danger" slot="end" onClick={() => removeTask(index)}>Delete</IonButton>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput placeholder="Enter new task" value={newTask} onIonChange={(e) => setNewTask(e.detail.value!)}></IonInput>
          <IonButton slot="end" onClick={addTask}>
            <IonIcon icon={add} />
            Add
          </IonButton>
        </IonItem>
        </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
      <IonButton onClick={navigateBack}>Back</IonButton>
    </IonPage>
  );
};

export default TodoList;
