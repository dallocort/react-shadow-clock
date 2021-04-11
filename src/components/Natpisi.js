import React, {Component} from "react";
import "../components/natpisi.css";

class Natpisi extends Component {
    state = {
        text: ""
    };

    componentDidMount = () => {
        const proxy = ""; //"https://cors-anywhere.herokuapp.com/" izbacujem proxy
        let response;

        const fecuj = async () => {
            const url = `${proxy}https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`;
            try {
                response = await fetch(url);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            } catch (error) {
                console.log(error);
            }
            if (response && response.ok) {
                this.setState({text: (await response.json()).text});
            }
        };
        fecuj();

        setInterval(() => {
            fecuj();
        }, 15000);
    };

    render() {
        //this.state.text;
        return (
            <aside>
                <p>Cats fact:</p>
                <p>{this.state.text}</p>
            </aside>
        );
    }
}

export default Natpisi;
