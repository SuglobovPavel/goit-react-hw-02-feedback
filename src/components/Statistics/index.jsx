import PropTypes from 'prop-types';
import {StatisticsBox, StatisticsElement} from "./index.styled";
import { Notification } from "components/Notification";


export const Statistics = ({good = 0, neutral = 0, bad = 0, total = 0, positivePercentage = 0}) => {
   let status = false;
   if( good || neutral || bad ){
      status = true;
   }

   return (
      <>
         {
            status && (   
               <StatisticsBox>
                  <StatisticsElement>Good: {good}</StatisticsElement>
                  <StatisticsElement>Neutral: {neutral}</StatisticsElement>
                  <StatisticsElement>Bad: {bad}</StatisticsElement>
                  <StatisticsElement>Total: {total}</StatisticsElement>
                  <StatisticsElement>Positive feedback: {positivePercentage}</StatisticsElement>
               </StatisticsBox>
            )
         }
         {
            !status && (   
               <Notification title="There is no feedback"></Notification>
            )
         }
      </>      
   );
};

Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.string.isRequired,
}