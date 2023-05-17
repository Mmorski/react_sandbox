import React, { useState } from "react";
import style from './ClassCounter.module.css';

interface CounterProps {
    //--- Here should be props from the parent component
}
  
interface CounterState {
    Count: number
}

class ClassCounter extends React.Component<CounterProps, CounterState>{

    constructor(props: CounterProps) {
        super(props);

        this.state = {
            Count: 0
        }

        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    Increment() {
        this.setState({...this.state, Count: this.state.Count + 1});
    }
    
    Decrement() {
        this.setState({...this.state, Count: this.state.Count - 1});
    }

    render() {
        return (
            <div className={style["class-counter"]}>
                <h1>ClassCounter</h1>
                <h1>Count: {this.state.Count}</h1>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        );
    }
}

export default ClassCounter;
