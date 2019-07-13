import React, {Component} from 'react'
import Timer from './Timer'
import './tim.css'

class Tim extends Component{
    constructor(props){
    super(props)
    this.state={
        mstim:0
    }

    }
    start = () => {
        if (this.state.interval){
            return
        }
        const idont = setInterval(()=>{
            this.setState({
                mstim: this.state.mstim + 1000
            })
        },
        1000) 
        this.setState({
            interval: idont
        })       
    }
    pause = () => {
        if(!this.state.interval) { return }
        clearInterval(this.state.interval)
        this.setState({interval:undefined})
    }
    stop = () => {
        this.setState({
            mstim:0
        })
        clearInterval(this.state.interval)
        this.setState({interval:undefined})
    }
    render(){
        return(
            <div>
                <Timer ms={this.state.mstim}/>
                <div className="button">
                    <input type='button' value='start' onClick={this.start} />
                    <input type='button' value='pause' onClick={this.pause} />
                    <input type='button' value='Reset' onClick={this.stop} />
                </div>
            </div>
        )
    }
}
export default Tim;