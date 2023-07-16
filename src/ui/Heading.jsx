import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font: 2rem;
      font-weight: 400;
    `}
`;

Heading.defaultProps = {
  type: "vertical",
};

export default Heading;
