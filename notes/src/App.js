import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NoteCard from "./components/notes/NoteCard";
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateNote from "./components/notes/CreateNote";

import NoteList from "./components/notes/NoteList";
import Note from "./components/notes/Note";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/notes/" component={NoteList} />
          <Route path="/note/:id" render={(props) => {
              return(<Note {...props}/>)}}
          />
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateNote} />
        </Switch>
      </div>
    );
  }
}

export default App;
