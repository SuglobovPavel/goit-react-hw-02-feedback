import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from "./index.styled";


export const Section = ({title, children}) => {
   return (
      <SectionContainer>
         { title && (<SectionTitle>{title}</SectionTitle>)}
         {children}
      </SectionContainer>
   );
}

Section.propTypes = {
   title: PropTypes.string
}