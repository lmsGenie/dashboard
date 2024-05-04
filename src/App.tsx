import { Route, Switch } from "wouter";
import "./App.css";
import Home from "./pages";
import Dashboard from "./pages/dashboard";
import CreateCourse from "./pages/new-course";
import MyCourses from "./pages/my-courses";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/new-course" component={CreateCourse}></Route>
      <Route path="/my-courses" component={MyCourses}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  );
}

export default App;
