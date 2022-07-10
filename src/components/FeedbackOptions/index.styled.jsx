import styled from '@emotion/styled';

export const FeedbackButtonsBox = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   box-sizing: border-box;

   button {
      padding: 10px;
      background: black;
      color: #ffffff;
      text-align: center;
      display: block;
      cursor: pointer;
      margin-left: 10px;
      margin-right: 10px;

      :hover {
         box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
      }
   }
`;