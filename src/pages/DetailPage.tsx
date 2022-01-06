import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { RouteComponentProps } from 'react-router';
import { Controller, useForm } from "react-hook-form";
import * as React from "react";
import { TextInput } from 'react-native';

interface DetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const DetailPage: React.FC<DetailPageProps> = ({ match }) => {
  const { control, handleSubmit } = useForm();
  const registerUser = (data: any) => {
    console.log('creating a new user account with: ', data);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{match.params.id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit(registerUser)}>
          <IonItem>
            {/* <IonLabel position="floating">Email</IonLabel> */}
              <Controller
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  />
                )}
                name="TextField"
                control={control}
                rules={{ required: true }}
              />
          </IonItem>
          <IonButton color="danger" expand="block" type="submit" className="ion-margin-top">
          Semak
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;