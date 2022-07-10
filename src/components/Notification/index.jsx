import PropTypes from 'prop-types';
import {NotificationTitle} from "./index.styled";

export const Notification = ({title}) => {
   return (
      <NotificationTitle>{title}</NotificationTitle>
   )
}

Notification.propTypes = {
   title: PropTypes.string.isRequired
}