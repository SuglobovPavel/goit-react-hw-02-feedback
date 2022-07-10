import PropTypes from 'prop-types';
import { FeedbackButtonsBox } from './index.styled';

export const FeedbackOptions = ({ callBack }) => {
   return (
      <FeedbackButtonsBox>
         <button onClick={()=>{
            callBack("good");
         }}>Good</button>
         <button onClick={()=>{
            callBack("neutral");
         }}>Neutral</button>
         <button onClick={()=>{
            callBack("bad");
         }}>Bad</button>
      </FeedbackButtonsBox>
   );
}

Notification.propTypes = {
   callback: PropTypes.func.isRequired
}