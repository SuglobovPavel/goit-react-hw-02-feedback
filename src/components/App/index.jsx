import { Component } from "react";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
 }

 incrimentState = ( name ) => {
    this.setState( (prevState) => {
      return {
          [name]: prevState[name] + 1,
      }
    });
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;

    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const {state, countTotalFeedback} = this;
    const {good} = state;
    
    const total = countTotalFeedback();
    return  Math.round((good / total) * 100) + "%"; 
  }

  render(){
    const {good, neutral, bad} = this.state;
    const {countTotalFeedback, countPositiveFeedbackPercentage} = this;

    return (
      <>
        <Section
          title="Please Leave feedback"
        >
          <FeedbackOptions 
            callBack={this.incrimentState}
          >
          </FeedbackOptions>
          
        </Section>
        <Section>
          <Statistics
                  good={good} 
                  neutral={neutral} 
                  bad={bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}
