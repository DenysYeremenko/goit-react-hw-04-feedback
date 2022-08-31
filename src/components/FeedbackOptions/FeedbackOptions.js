import { Box } from 'components/Box';
import { FeedbackButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex">
      {options.map(option => (
        <FeedbackButton key={option} onClick={onLeaveFeedback}>
          {option.toUpperCase()}
        </FeedbackButton>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
