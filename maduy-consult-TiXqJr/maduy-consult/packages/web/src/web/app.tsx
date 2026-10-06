import { Route, Switch } from "wouter";
import Index from "./pages/index";
import AlliancePage from "./pages/alliance";
import WestAfricaPage from "./pages/west-africa";
import FundingPage from "./pages/funding";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/alliance" component={AlliancePage} />
        <Route path="/west-africa" component={WestAfricaPage} />
        <Route path="/funding" component={FundingPage} />
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
