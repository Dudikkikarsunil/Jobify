// import React from 'react'
// import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
// import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
            I'm baby four dollar toast sriracha synth, meditation everyday carry
            wayfarers neutra put a bird on it affogato heirloom Brooklyn.
            Humblebrag cold-pressed marxism PBR&B. Wayfarers etsy typewriter,
            tacos fanny pack ugh bespoke jianbing fixie gentrify hoodie pug
            photo booth mixtape.
          </p>
          <button className="btn btn-hero">Login/Singup</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh -var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }
//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//   }
//   p {
//     color: var(--gray-700);
//   }
//   .main-img {
//     display: none;
//   }
//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `;
export default Landing;
