import React, { useState } from "react";
import styled from "styled-components";
import { RiHomeSmileFill } from "react-icons/ri";
import { IoMdPricetags, IoMdContact } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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

            <Navs to="/footer" cl={scroll ? "#8A2BE2" : "white"}>
              <IoMdContact />
              <span>Contact us</span>
            </Navs>

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
                <SideNavs to="footer">
                  {" "}
                  <IoMdContact /> Contact us
                </SideNavs>
                <SideNavs to="/donateblood">
                  {" "}
                  <IoMdPricetags /> Donate Blood
                </SideNavs>

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
      </Container>
    </>
  );
};
export default Header;

// <Container bg="">
//   <Wrapper>
//     <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
//       <Logo cr="">LIFECARE.</Logo>
//     </NavLink>

//     <Navigations>
//       <Navs to="/" cl="white">
//         <RiHomeSmileFill />
//         <span>Home</span>
//       </Navs>

//       <Navs to="/footer" cl="white">
//         <IoMdContact />
//         <span>Contact us</span>
//       </Navs>

//       <Navs to="/donateblood" cl="white">
//         <IoMdPricetags />
//         <span>Donate Blood</span>
//       </Navs>

//       <Navs to="/signup" cl="">
//         <Button>Sign Up</Button>
//       </Navs>
//       <Navs to="/signin" cl="">
//         <Button style={{ backgroundColor: "white", color: "#8A2BE2" }}>
//           Sign In
//         </Button>
//       </Navs>
//     </Navigations>

//     <BurgerMenu onClick={toggle}>
//       <GiHamburgerMenu />
//     </BurgerMenu>

//     {show ? (
//       <DropDown>
//         <Holder>
//           <SideNavs style={{ color: "white" }} to="/">
//             {" "}
//             <RiHomeSmileFill /> Home
//           </SideNavs>
//           {/* <SideNavs to="/about">About</SideNavs> */}
//           <SideNavs to="footer">
//             {" "}
//             <IoMdContact /> Contact us
//           </SideNavs>
//           <SideNavs to="/donateblood">
//             {" "}
//             <IoMdPricetags /> Donate Blood
//           </SideNavs>
//           <SideNavs
//             style={{
//               width: "100px",
//               backgroundColor: "white",
//               color: "#8a2be2",
//               height: "40px",
//               borderRadius: "5px",
//             }}
//             to="/signup"
//           >
//             Sign Up
//           </SideNavs>
//           <SideNavs
//             style={{
//               width: "100px",
//               backgroundColor: "transparent",
//               border: "1px solid white",
//               height: "40px",
//               borderRadius: "5px",
//             }}
//             to="/signin"
//           >
//             Sign In
//           </SideNavs>
//         </Holder>
//       </DropDown>
//     ) : null}
//   </Wrapper>
// </Container>
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
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-family: poppins;
  font-weight: 600;
  z-index: 10;
  position: absolute;
  top: 70px;
  right: 20px;
  border-radius: 7px;
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
    width: 45px;
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
    display: block;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 3px;
    color: #8a2be2;
  }
`;
