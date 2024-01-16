import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 300px;
  margin: 10% auto;
`;

export const StyledField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

export const ErrorMsg = styled.div`
  color: red;
  margin-top: 5px;
`;

export const StyledSubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db; /* You can change the color to your preference */
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9; /* You can change the hover color */
  }
`;