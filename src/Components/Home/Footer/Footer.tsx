import React from "react";
import styled from "styled-components";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  const [scroll, setScroll] = React.useState<Boolean>(false);

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <Container id="footer">
      <Wrapper>
        <AbtBag>
          <Logo>LYFECARE.</Logo>
          <Text>
            LIFECARE is founded with the passion to safe lives, eliminating the
            excuse of no money in the case of health emergency.
          </Text>
          <Icn>
            <AiOutlinePhone />
            <Number>+2347015961501, +2349029903813 </Number>
          </Icn>

          <Icn>
            <AiOutlineMail />
            <Number>lifecare428@gmail.com</Number>
          </Icn>

          <button style={{ color: "white" }}>Get Started</button>
        </AbtBag>

        <OtherNav>
          <Holder>
            <Title>Menu</Title>
            <span>Home</span>
            <span>Contact Us</span>
            <span>Donate Blood</span>
          </Holder>
          <Holder>
            <Title>Help</Title>
            <span>FAQ</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </Holder>
          <Holder>
            <Title>Socials</Title>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Whatsapp</span>
          </Holder>
        </OtherNav>
      </Wrapper>
      <small style={{ fontFamily: "poppins" }}>Powered by CODELAB.</small>

      {scroll ? (
        <Link offset={-100} smooth={true} duration={500} to="hero">
          <ScroolToTop>
            <BsFillArrowUpCircleFill />
          </ScroolToTop>
        </Link>
      ) : null}
    </Container>
  );
};

export default Footer;

const ScroolToTop = styled.div`
  /* padding: 16px 17px; */

  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  background-color: #8a2be2;
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  right: 1%;
  font-size: 30px;
  box-shadow: #8a2be2 0px 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: fixed;
  bottom: 2%;
  @media screen and (max-width: 768px) {
    right: 3%;
  }
`;

const Icn = styled.div`
  display: flex;
  align-items: center;
`;
const Number = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  font-family: montserrat;
  small {
    font-size: 8px;
    margin-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
  font-family: poppins;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const AbtBag = styled.div`
  margin-bottom: 10px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
  button {
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    color: black;
    background-color: #8a2be2;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 600;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    margin-top: 20px;

    :hover {
      transform: scale(0.94);
    }
  }
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Text = styled.div`
  width: 250px;
  font-size: 12px;
  margin-bottom: 15px;
  text-align: justify;
`;
const OtherNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  font-size: 15px;
  font-family: poppins;

  @media (max-width: 500px) {
    align-items: center;
    margin-bottom: 20px;
  }

  span {
    margin: 10px 0;
    font-weight: lighter;
  }
`;
const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  color: #8a2be2;
`;
