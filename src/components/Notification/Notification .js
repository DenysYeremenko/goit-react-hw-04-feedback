import { Component } from "react"

export class Notification extends Component {
    render() {
        return <span>{this.props.message}</span>
    }
}