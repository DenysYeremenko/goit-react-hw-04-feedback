import { SectionHeader } from "./Section.styled"
import { Box } from "components/Box"
import PropTypes from 'prop-types';

export const Section = ({title, children}) => { 
        return <Box as='section' display="flex" alignItems="center" flexDirection="column">
                    <SectionHeader>{title}</SectionHeader>
                    {children}
                </Box>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}