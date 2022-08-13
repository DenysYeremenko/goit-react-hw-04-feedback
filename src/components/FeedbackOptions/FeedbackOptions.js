import { Component } from "react"
import { Box } from "components/Box";
import { FeedbackButton } from "./FeedbackOptions.styled";

export class FeedbackOptions extends Component {
    
    render() {
        const {
            options,
            onLeaveFeedback
        } = this.props
        
    return (<Box display="flex">
       <FeedbackButton onClick={onLeaveFeedback}>{options[0]}</FeedbackButton>
       <FeedbackButton onClick={onLeaveFeedback}>{options[1]}</FeedbackButton>   
       <FeedbackButton onClick={onLeaveFeedback}>{options[2]}</FeedbackButton>            
    </Box>)
    }
}