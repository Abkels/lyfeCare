import React, { useState } from "react";
import styled from "styled-components";
import { RiHomeSmileFill } from "react-icons/ri";
import { IoMdPricetags, IoMdContact } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  const [scroll, setScroll] = useState<Boolean>(false);

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <Container
        bg={scroll ? "white" : ""}
        style={{ transition: "all 350ms ease-in-out" }}
      >
        <Wrapper>
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            <Logo src="/images/lyfeCareLogo.jpg" />
          </NavLink>

          <Navigations>
            <Navs to="/" cl={scroll ? "#8A2BE2" : "white"}>
              <RiHomeSmileFill />
              <span>Home</span>
            </Navs>

            <Link offset={-100} smooth={true} duration={700} to="footer">
              <Contact cl={scroll ? "#8A2BE2" : "white"}>
                <IoMdContact />
                <span>Contact us</span>
              </Contact>
            </Link>

            <Navs to="/donateblood" cl={scroll ? "#8A2BE2" : "white"}>
              <IoMdPricetags />
              <span>Donate Blood</span>
            </Navs>

            <Navs to="/signup" cl={scroll ? "#8A2BE2" : ""}>
              <Button>Sign Up</Button>
            </Navs>
            <Navs to="/signin" cl={scroll ? "#8A2BE2" : ""}>
              <Button style={{ backgroundColor: "white", color: "#8A2BE2" }}>
                Sign In
              </Button>
            </Navs>
          </Navigations>

          <BurgerMenu onClick={toggle}>
            <GiHamburgerMenu />
          </BurgerMenu>

          {show ? (
            <DropDown>
              <Holder>
                <SideNavs style={{ color: "white" }} to="/">
                  {" "}
                  <RiHomeSmileFill /> Home
                </SideNavs>

                {/* <SideNavs to="/about">About</SideNavs> */}

                <Link offset={-100} smooth={true} duration={700} to="footer">
                  <ContactMedia>
                    {" "}
                    <IoMdContact /> Contact us
                  </ContactMedia>
                </Link>

                {/* <SideNavs to="/donateblood">
                  {" "}
                  <IoMdPricetags /> Donate Blood
                </SideNavs> */}

                <SideNavs
                  style={{
                    width: "100px",
                    backgroundColor: "white",
                    color: "#8a2be2",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                  to="/signup"
                >
                  Sign Up
                </SideNavs>

                <SideNavs
                  style={{
                    width: "100px",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                  to="/signin"
                >
                  Sign In
                </SideNavs>
              </Holder>
            </DropDown>
          ) : null}
        </Wrapper>
        {scroll ? null : (
          <Link offset={-100} smooth={true} duration={500} to="footer">
            <ScroolToButton>
              <BsFillArrowDownCircleFill />
            </ScroolToButton>
          </Link>
        )}
      </Container>
    </>
  );
};
export default Header;

const ContactMedia = styled.div`
  text-decoration: none;
  width: 100%;
  margin-top: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin-bottom: 15px;

  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(0.9);
  }

  button {
    height: 30px;
    width: 150px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    background-color: #087cc5;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 600;
    transition: all 350ms;
    cursor: pointer;
    :hover {
      transform: scale(0.94);
    }
  }
  :hover {
    color: #ffb400;
  }

  &.active {
    color: #087cc5;
  }

  span {
    margin-left: 5px;
  }
`;

const Contact = styled.div<{ cl: string }>`
  color: ${(props) => props.cl};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 14px;
  /* #F3F7F5
  #F3F7F5 */
  span {
    margin-left: 3px;
    font-weight: 600;
  }
`;

const ScroolToButton = styled.div`
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

const SideNavs = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  margin-top: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin-bottom: 15px;

  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(0.9);
  }

  button {
    height: 30px;
    width: 150px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    background-color: #087cc5;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 600;
    transition: all 350ms;
    cursor: pointer;
    :hover {
      transform: scale(0.94);
    }
  }
  :hover {
    color: #ffb400;
  }

  &.active {
    color: #087cc5;
  }

  span {
    margin-left: 5px;
  }
`;
const DropDown = styled.div`
  height: 330px;
  width: 250px;
  background: #8a2be2;
  backdrop-filter: blur(10px);
  justify-content: center;
  /* align-items: center; */
  font-family: poppins;
  font-weight: 600;
  z-index: 10;
  position: absolute;
  top: 70px;
  right: 20px;
  display: none;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Holder = styled.div`
  margin-top: 40px;
`;
const Button = styled.button`
  /* padding: 7px 10px; */
  // padding: 15px;
  width: 120px;
  height: 40px;
  display: block;
  // margin-left: 15px;
  justify-content: center;
  font-family: poppins;
  cursor: pointer;
  transition: all 360ms ease-in-out;

  :hover {
    transform: scale(0.94);
  }
  /* align-items: center; */
  font-family: poppins;
  background-color: #8a2be2;
  border: none;
  outline: none;
  color: white;
  font-weight: 600;
  border-radius: 7px;
`;

const Container = styled.div<{ bg: string }>`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  position: fixed;
  z-index: 100;

  @media (max-width: 510px) {
    height: 65px;
  }
`;
const Wrapper = styled.div`
  width: 87%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;

  @media (max-width: 510px) {
    width: 130px;
  }

  @media (max-width: 375px) {
    width: 100px;
  }
`;

const Navigations = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navs = styled(NavLink)<{ cl: string }>`
  color: ${(props) => props.cl};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;
  /* #F3F7F5
  #F3F7F5 */
  span {
    margin-left: 3px;
    font-weight: 600;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    font-size: 30px;
    height: 45px;
    cursor: pointer;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 3px;
    color: #8a2be2;
  }
`;
