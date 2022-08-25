import { StatisticsList, StatisticsListItem } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <>
              <StatisticsList>
                  <StatisticsListItem good={true}>Good: {good}</StatisticsListItem>
                  <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
                  <StatisticsListItem>Bad: {bad}</StatisticsListItem>
                  <StatisticsListItem>Total: {total}</StatisticsListItem>
                  <StatisticsListItem>Positive feedback: {positivePercentage}%</StatisticsListItem>
              </StatisticsList>
            </>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}