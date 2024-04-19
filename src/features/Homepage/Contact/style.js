import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  height: 150px;
  resize: vertical;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Link = styled(NavLink)`
  color: #0000ee;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ArrowRight = styled.span`
  margin-left: 10px;
`;
