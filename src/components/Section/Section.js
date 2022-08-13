import { Component } from "react"
import { SectionHeader } from "./Section.styled"
import { Box } from "components/Box"

export class Section extends Component {
    render() {
        return <Box as='section' display="flex" alignItems="center" flexDirection="column">
            <SectionHeader>{this.props.title}</SectionHeader>
            {this.props.children}
        </Box>
    }
}