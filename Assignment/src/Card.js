import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state= {
            hidden:true
        }
    }
    
    showDetails = () =>{
        // console.log(this.props.book.author);
        // {(!hidden):() ?<p></p>}

        if(this.state.hidden){
            this.setState({hidden : false});
            return <p>{this.props.book.summary}</p>;
        }else{
            this.setState({hidden : false});
            return <p></p>
        }
    }

    render() {
        return (
            <div className='card'>
                <h6 className='text-center'>{this.props.book.title}</h6>
                <p>Author:{this.props.book.author}</p>
                {this.showDetails()}
                <button className='btn btn-danger' onClick={this.showDetails()} >Hide Details</button>
                <button className='btn btn-primary' onClick={this.showDetails()}>Show Details</button>
            </div>
        )
    }
}
