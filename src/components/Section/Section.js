import { Component } from "react"
import { SectionHeader } from "./Section.styled"
import { Box } from "components/Box"
import PropTypes from 'prop-types';

export class Section extends Component {
    render() {
        const {title, children} = this.props
        return <Box as='section' display="flex" alignItems="center" flexDirection="column">
            <SectionHeader>{title}</SectionHeader>
            {children}
        </Box>
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}