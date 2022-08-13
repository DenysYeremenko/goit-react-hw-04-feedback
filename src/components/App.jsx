import { FeedbackOptions  } from "./FeedbackOptions/FeedbackOptions.js"
import { Component } from "react"
import { Statistics } from "./Statistics/Statistics.js"
import { Section } from "./Section/Section.js"
import { Notification } from "./Notification/Notification .js"
import { GlobalStyle } from "./GlobalStyle.js"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)
  
  countPositiveFeedbackPercentage = () => ((100/this.countTotalFeedback())*this.state.good).toFixed(0)

  LeaveFeedback = (e) => {
    const feedback = e.target.textContent.toLowerCase();
    this.setState(prevState =>({
      [feedback]: prevState[feedback]+1  
      })
    )
  }

  render() {
      return (
          <>
          <div>
              <Section title="Please leave feedback">
                <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={this.LeaveFeedback} />
              </Section>
              <Section title="Statistics">
                {this.countTotalFeedback() > 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
              </Section>
          </div>
          </>
      )
  }
};