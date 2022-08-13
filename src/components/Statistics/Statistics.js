import { StatisticsList, StatisticsListItem } from "./Statistics.styled"

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