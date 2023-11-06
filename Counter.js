import React,{Component} from 'react';
class Counter extends Component{
    state={
        count:0,
    };
    increment=()=>{
        this.setState({
            count:this.state.count+1
        });
    };
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        });
    };
    render(){
        return(
            <div>
                <button type="button" onClick={this.increment}>+</button>
                &nbsp;&nbsp;
                {this.state.count}
                &nbsp;&nbsp;
                <button type="button" onClick={this.decrement}>-</button>
            </div>
        );
    }
}
export default Counter;