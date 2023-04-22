import React, { useState, useEffect } from "react";
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
    min-height: 25rem;
    min-width: 40rem;
    width: auto;
    flex-direction: column;
    max-height: 400px;
  }

  img {
    max-width: 15rem;
    max-height: 11rem;
    width: auto;
    height: auto;
    border: 1px solid ${stylevar.style.backgroundOne};
    filter: grayscale(85%);
    transition-timing-function: ease-in;
    transition-duration: 100ms;
    @media (min-width: ${stylevar.style.tabletWidth}) {
      max-width: 25rem;
      max-height: 21rem;
    }
    @media (min-width: ${stylevar.style.desktopWidth}) {
      max-width: 35rem;
      max-height: 17rem;
    }
    &:hover {
      transition-timing-function: ease-out;
      transition-duration: 100ms;
      filter: grayscale(0%);
      cursor: pointer;
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
interface Desc {
  readonly isClicked: boolean;
}
const Desc = styled.div<Desc>`
  padding: 0 0.5rem 0.5rem;
  display: ${({ isClicked }) => (isClicked ? "inline" : "none")};
  margin-bottom: 1.5rem;
  @media (min-width: ${stylevar.style.desktopWidth}) {
    font-size: 1.25rem;
  }
`;

const Btn = styled.button`
  border: none;
  border-radius: 0.25rem;
  margin-right: 1rem;
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

const Layout = styled.div`
  @media (min-width: ${stylevar.style.desktopWidth}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* overflow:auto; */
  }
`;

function Widget({ e }: any) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <Layout>
        <Project>
          <div>
            <ul>
              <h1>{e.name}</h1>
              <h4>{e.subTitle}</h4>
              <h5>{e.date}</h5>
              <p>{e.techStack}</p>
            </ul>
            <img src={e.img} alt="project" onClick={handleClick} />
          </div>
        </Project>
        {/* <Desc isClicked={window.innerWidth >= 1280 ? true : isClicked}> */}
        <Desc isClicked={isClicked}>
          <a href={e.link}>
            <Btn>Link to GH Repo</Btn>
          </a>
          {e.description}
        </Desc>
      </Layout>
    </>
  );
}

export default Widget;
