import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './state-management/store';
import { incrementAction,
         decrementAction,
         resetAction } from './state-management/action/countAction';






class App extends React.Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        
        store.subscribe(() => this.forceUpdate())
    }
    increment() {
        const amount = +this.refs.amount.value || 1;
        store.dispatch(incrementAction(amount))
    }
    decrement() {
        const amount = +this.refs.amount.value || 1;
        store.dispatch(decrementAction(amount))
    }
    reset() {
        store.dispatch(resetAction)
    }

    render() {
        const state = store.getState().countReducer;
        console.log(state)
        return (
            <div>
                <h2>Counter</h2>
                {/* <span>{state}</span> */}
                <div>
                   <button onClick={this.decrement}>-</button>
                   <button onClick={this.reset}>R</button>
                   <button onClick={this.increment}>+</button>
                </div>
                <input type="text" ref="amount" defaultValue="1"/>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
