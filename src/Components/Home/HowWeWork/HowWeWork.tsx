import React from "react";
import styled from "styled-components";
import register from "../../Images/register.svg"
import help from "../../Images/help.svg"
import doctor from "../../Images/doctor.svg"
import save from "../../Images/save.svg"

const HowWeWork = () => {
  return (
    <Container>
      <Wrapper>
        <Title>How We Work</Title>
        <SubTitle>Easy As One, Two, Three</SubTitle>
        <CardHold>
          <Card>
            <InCard>
              <IconDiv>
                <Img src = {register} />
              </IconDiv>
              <CardTitle>Register</CardTitle>
              <CardContent>
                Register with us in a few minutes
              </CardContent>
            </InCard>
          </Card>
          
          <Card>
            <InCard>
              <IconDiv>
                <Img src = {save} />
              </IconDiv>
              <CardTitle>Savings</CardTitle>
              <CardContent>
                Saves you in the absence of cash when thers is emergency
              </CardContent>
            </InCard>
          </Card>

          <Card>
            <InCard>
              <IconDiv>
                <Img src = {help} />
              </IconDiv>
              <CardTitle>Help your friends</CardTitle>
              <CardContent>
                You can send help to friends having health emergencies
              </CardContent>
            </InCard>
          </Card>

          <Card>
            <InCard>
              <IconDiv>
                <Img src = {doctor} />
              </IconDiv>
              <CardTitle>Book a session</CardTitle>
              <CardContent>
                You can book appointments with a health specialist
              </CardContent>
            </InCard>
          </Card>

        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default HowWeWork;

const Img = styled.img`
height: 95px;
color: #8A2BE2;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  /* font-family: nunito; */
`;
const SubTitle = styled.div`
  font-size: 13px;
  margin-bottom: 30px;
  color: #8A2BE2;
  font-weight: bold;
`;
const CardHold = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  height: 210px;
  width: 230px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
const InCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
`;
const IconDiv = styled.div`
  height: 50px;
  width: 50px;
  /* background-color: #dbdaf4;
  color: #7c4fcf; */
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 20px;
`;
const CardTitle = styled.div`
margin-top: 15px;
  font-weight: 700;
  margin-bottom: 15px;
  // color: #8A2BE2;
`;

const CardContent = styled.div`
  font-size: 13px;
`;
