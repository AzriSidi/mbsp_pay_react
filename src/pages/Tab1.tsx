import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonModal, IonPage, IonRow, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import './Tab1.css';

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

const categoryService: CategoryService = new CategoryService;
const category: Category[] = categoryService.categoryList();
  
export const Tab1: React.FC = () => {
  const [modalInfo, setModalInfo] = useState({visible :false, msg : ""});
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const Body: React.FC<{
    text: string;
    onDismiss: () => void;
  }> = ({ onDismiss }) => (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{modalInfo.msg}</IonTitle>
          <IonButton color="success" slot="end" onClick={() => onDismiss()}>
            X
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
          render={({ field }) => <input {...field} />}
          name="firstName"
          control={control}
          defaultValue=""
        />
        <input type="submit" />
      </form>
      </IonContent>
    </div>
  );

  const handleDismiss = () => {
    dismiss();
  };
    
  const [present, dismiss] = useIonModal(Body, {
    onDismiss: handleDismiss,
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Semak</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>{
            category.map((item, i) => (
              <IonCol key={i} size="6">
                <IonCard class="ion-no-padding ion-no-margin" 
                  onClick={() => {
                    present({
                      cssClass: 'my-class',
                    });
                    setModalInfo({visible:true, msg:item.name})
                  }}>
                  <img src={item.image} />
                  <IonCardHeader>
                    <IonCardSubtitle class="ion-text-center">{item.name}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))
          }</IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Tab1;