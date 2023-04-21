import { React, useState, useEffect } from "react";
import styled from "styled-components";
import * as stylevar from "../styles/variables";

const Project = styled.section`
  width: 100%;
  padding: 0.5rem;
  min-height: 19rem;
  color: #2b2b2b;
  background-color: #cfcfcf;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: ${stylevar.style.tabletWidth}) {
    justify-content: center;
  }
  @media (min-width: ${stylevar.style.desktopWidth}) {
    min-height: 35rem;
    min-width: 50rem;
    width: auto;
    flex-direction: column;
  }

  img {
    max-width: 15rem;
    max-height: 11rem;
    width: auto;
    height: auto;
    border: 1px solid ${stylevar.style.backgroundOne};
    @media (min-width: ${stylevar.style.tabletWidth}) {
      max-width: 25rem;
      max-height: 21rem;
    }
    @media (min-width: ${stylevar.style.desktopWidth}) {
      max-width: 35rem;
      max-height: 35rem;
    }
  }

  div {
    @media (min-width: ${stylevar.style.tabletWidth}) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: space-around;
      width: 100%;
    }
  }
  
  h1 {
    @media (min-width: ${stylevar.style.desktopWidth}) {
      font-size: 2rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Desc = styled.div`
  padding: 0 0.5rem 0.5rem;
  display: ${({ isClicked }) => (isClicked ? "inline" : "none")};
  margin-bottom: 1.5rem;
`;
const DescDesk = styled.p`
  padding: 0 0.5rem 0.5rem;
  display: ${({ isDesk }) => (isDesk ? "inline" : "none")};
  margin-bottom: 1.5rem;
`;

const Btn = styled.button`
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${stylevar.style.primaryTwo};
  color: ${stylevar.style.primaryOne};
  transition-duration: 300ms;
  &:hover {
    transition-duration: 250ms;
    transition-delay: 50ms;
    animation-timing-function: ease-in;
    background-color: ${stylevar.style.backgroundOne};
    cursor: pointer;
  }
`;

function Widget({ e }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e) => {
    if (window.innerWidth >= 1280) {
      return;
    } else {
      setIsClicked(!isClicked);
    }
  };
  return (
    <>
      {/* <Project onClick={() => !window.innerWidth? setIsClicked(!isClicked) : null} isClicked={isClicked}> */}
      <Project onClick={handleClick} isClicked={isClicked}>
        <div>
          <ul>
            <h1>{e.name}</h1>
            <h4>{e.subTitle}</h4>
            <h5>{e.date}</h5>
            <p>{e.techStack}</p>
          </ul>
          <img src={e.img} alt="project" />
        </div>
        <DescDesk isDesk={window.innerWidth >= 1280 ? true : false}>
          {e.description} <Btn>Link to GH Repo</Btn>
        </DescDesk>
      </Project>
      <Desc isClicked={isClicked}>
        {e.description} <Btn>Link to GH Repo</Btn>
      </Desc>
    </>
  );
}

export default Widget;
