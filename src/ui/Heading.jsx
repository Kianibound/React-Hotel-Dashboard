import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 5rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font: 4rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font: 300.5;
      font-weight: 400;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 800;
      text-align: center;
    `}
`;

Heading.defaultProps = {
  type: "vertical",
};

export default Heading;
