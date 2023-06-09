import React from 'react';
import styled from "styled-components";
import pic from "../Images/sign-up.svg";


const UserSignUp3 = () => {
    
  return (
    <div>
    <Body>
      <Hold>

        <Right>
        <RightImg src={pic} />
        </Right>


        <Left>

          <Form>

            <Seq>
                <SeqNum>1</SeqNum>
                <div> ----- </div>
                <SeqNum>2</SeqNum>
                <div> ----- </div>
                <SeqNum>3</SeqNum>
                <div> ----- </div>
                <SeqNum style={{color:"white", backgroundColor:"#8A2BE2"}}>4</SeqNum>
            </Seq>

            <Input type="text" placeholder="Bank Name" />


            <Input type="text" placeholder="Bank Acc Num" />


            <Input type="text" placeholder="Name of Next of Kin"  />

            <Input type="text" placeholder="Phone Num of Next of Kin"  />

            <Button type="submit">Complete Registration</Button>
            
          </Form>
        </Left>

      </Hold>
    </Body>

    </div>
  )
};

export default UserSignUp3;

const SeqNum = styled.h6`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #8a2be2;
  color: #8a2be2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Seq = styled.div`
width: 100%;
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

div{
color: #8A2BE2;
}
`;

const RightImg = styled.img`
  width: 500px;
`;

const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const Body = styled.div``;

const Button = styled.button`
  width: 105%;
  height: 45px;
  background: #8A2BE2;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: transparent;
    border: 1px solid #8A2BE2;
    color: #8A2BE2;
  }
`;

const Input = styled.input`
  // <{ props: string }>
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0 0 2px #8A2BE2;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;

  p {
    font-size: 10px;
  }

  @media screen and (max-width: 425px) {
    box-shadow: none;
    border-bottom: 1px solid #567e22;
  }
  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

const Form = styled.form`
  width: 270px;
  height: 300px;
  box-shadow: 0 0 3px #8A2BE2;
  border-radius: 10px 0 10px 0;
  padding: 30px 30px;
//   padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    // padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
  }

  @media screen and (max-width: 375px) {
    width: 285px;
    // padding: 10px;
    // padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;

const Hold = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;