// #121113 - background
// #5c4054
// #966889
// #A198AB
// #fff5ee - font
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const leftSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-300%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const rightSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(300%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const rightSlideOut = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(300%);
  }
`;

const topSlideIn = keyframes`
  from {
    transform: translateY(-500%);
  }

  to {
    transform: translateY(0%);
  }
`;

const bottomSlideIn = keyframes`
  from {
    transform: translateY(150%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const fadeInAnimation = css`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 1s;
  animation-fill-mode: forwards;
`;

export const fadeOutAnimation = css`
  animation: ${fadeOut} 1.25s ease-in-out 1.25s;
  animation-fill-mode: backwards;
  opacity: 0;
`;

export const leftSlideInAnimation = css`
  animation: ${leftSlideIn} 1s ease-out;
`;

export const rightSlideInAnimation = css`
  animation: ${rightSlideIn} 1s ease-out;
`;

export const rightSlideOutAnimation = css`
  animation: ${rightSlideOut} 1.25s ease-out;
`;

export const topSlideDownAnimation = css`
  animation: ${topSlideIn} 1s ease-out;
`;

export const bottomSlideUpAnimation = css`
  animation: ${bottomSlideIn} 1.25s ease-out;
`;

export const sharedSectionContainerStyles = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 75px;
  min-height: 100vh;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding: 50px 25px;
    min-height: 0;
  }
`;

export const sharedSectionHeadingStyles = css`
  font-size: 2.25rem;
  margin: 0 calc(30px - 0.75rem) 0 30px;
  letter-spacing: 0.75rem;
  @media only screen and (max-width: 600px) {
    margin: 0 12.5px;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const sharedHeadingStyles = css`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff5ee;
  letter-spacing: 0.15rem;
  margin: 0.25rem 0;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    letter-spacing: normal;
    white-space: normal;
  }
`;

export const sharedSubheadingStyles = css`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: #fff5ee;
  letter-spacing: 0.15rem;
  margin: 0.25rem 0;

  @media only screen and (max-width: 600px) {
    font-size: .8rem;
    letter-spacing: normal;
    white-space: normal;
  }
`;

export const sharedBodyFontStyles = css`
  margin-top: 25px;
  /* font-family: "Roboto Mono", serif; */
  font-family: "Ubuntu Mono", monospace;
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff5ee;
  text-align: left;
  letter-spacing: 0.05rem;

  @media only screen and (max-width: 600px) {
    margin-top: 12.5px;
    font-size: 1rem;
    letter-spacing: normal;
    white-space: normal;
  }
`;

export const sharedHorizontalLineStyles = css`
  border-color: #fff5ee;
  border: 0;
  opacity: 0.7;
  border-top: 5px solid #fff5ee;

  @media only screen and (max-width: 600px) {
  }
`;

export const GeneralSectionHeading = styled.h1``;
