import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";
import AddTask from "./Components/AddTask"; 
import ListTask from "./Components/ListTask";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
