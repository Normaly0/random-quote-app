import React from 'react';
import styles from './quote-generator.scss';


class QuoteBox extends React.Component {
    render() {
        return (
            <div className = "container">
                <div className = "quote-container">
                    <p className = "quote">{this.props.quote}</p>
                    <br></br>
                    <p className = "author"> - {this.props.name}</p>
                </div>
                <div className = "button-box">
                    <button className = "button" onClick = {() => {this.props.handleClick()}}>New Quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteBox;