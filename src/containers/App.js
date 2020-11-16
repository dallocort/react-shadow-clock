import React, {Component} from "react";
import Clock from "../components/Clock";
import Natpisi from "../components/Natpisi";
import "../containers/App.css";

class App extends Component {
    state = {};

    render() {
        return (<React.Fragment>
                <Clock/>
                <Natpisi/>
            </React.Fragment>);
    }
}

export default App;
