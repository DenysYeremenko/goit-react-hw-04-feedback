import { Component } from "react"
import PropTypes from 'prop-types';

export class Notification extends Component {
    render() {
        return <span>{this.props.message}</span>
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}