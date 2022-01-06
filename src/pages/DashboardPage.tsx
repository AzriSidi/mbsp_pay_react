import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, RouteComponentProps } from "react-router";
import Tab1 from "./Tab1";
import DetailPage from "./DetailPage";

const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
    return (
      <IonReactRouter>
        <Route exact path={match.url} component={Tab1} />
        <Route path={`${match.url}/:id`} component={DetailPage} />
        <Route render={() => <Redirect to={match.url} />} />
      </IonReactRouter>
    );
  };

export default DashboardPage;