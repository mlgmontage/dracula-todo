import "app/styles/index.css";
import Routing from "pages";
import { withProviders } from "./providers/with-provider";

const App = () => {
  return (
    <div className="App">
      <Routing />
    </div>
  );
};

export default withProviders(App);
