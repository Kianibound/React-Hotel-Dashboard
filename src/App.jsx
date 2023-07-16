import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const AppStyle = styled.div`
  background-color: orangered;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppStyle>
        <H1>Hotel Dashboard</H1>
        <Button
          variation="primary"
          size="medium"
          onClick={() => alert("Clicked Me!")}
        >
          Click Me
        </Button>
        <Button
          variation="danger"
          size="small"
          onClick={() => alert("Clicked Them!")}
        >
          Click Them
        </Button>
      </AppStyle>
    </>
  );
};

export default App;
