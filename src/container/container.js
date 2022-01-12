import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actions.js';

import QuoteBox from '../components/quote-generator.js';
import styles from './container.scss';

class Container extends React.Component {
    render() {
        return(
            <div>
                <h1 className = "title">Random Quote Generator</h1>
                <QuoteBox 
                handleClick = {this.props.loadQuote} 
                quote = {this.props.quote}
                name = {this.props.name}
                />
                <p className = "credit">Coded by Normaly</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators)(Container);