import styled from 'styled-components';

export const Loading = styled.div`
  text-align: center;
  padding: 15px;

  :before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #2fbf77;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }
`;