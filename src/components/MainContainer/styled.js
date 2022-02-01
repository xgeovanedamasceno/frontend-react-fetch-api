import styled from 'styled-components';

const MainContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 600px;

  h1, h2 {
    margin-left: 10px;
    margin-top: 20px;
    color: #000000;
  }
  
  li h2 {
    margin-top: 0;
    color: #24292F;
  }

  p {
    margin-bottom: 20px;
    color: #24292F;
  }
`;

export default MainContainerStyle;
