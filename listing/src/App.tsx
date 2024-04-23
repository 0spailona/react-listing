import Listing from "./Listing.tsx";
import {Component} from "react";


export default class App extends Component {
    state = {data: []}

    async componentDidMount() {
        const response = await fetch('etsy.json');
        this.setState({data: await response.json()})
    }

    render() {
        return (
            <Listing items={this.state.data}/>
        );
    }
}


