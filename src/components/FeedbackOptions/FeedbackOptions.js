import { Component } from "react"
import { Box } from "components/Box";
import { FeedbackButton } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired
    }

    render() {
        const {
            options,
            onLeaveFeedback
        } = this.props
        
    return (<Box display="flex">
        {options.map(option => <FeedbackButton key={option} onClick={onLeaveFeedback}>{option.toUpperCase()}</FeedbackButton>)}    
    </Box>)
    }
}
