import { Component } from 'react';


class CounterWithClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }



    render() {

       const {count} = this.state;


        return (
            <div>
                <button onClick={()=>this.setState({count: count+1})}>{count}</button>
            </div>
        );
    }
}


export default CounterWithClassComponent;