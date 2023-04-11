import React, { useMemo } from 'react';
import styled from 'styled-components';
import pic from "../Images/otp.svg";
import { RE_DIGIT } from "../../constants"


type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

const InputOTP = ({value, valueLength, onChange} : Props) => {

  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items:Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
    

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push(" ")
      }
    }

    return items;
  }, [value, valueLength])

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    // if (!RE_DIGIT.test(targetValue)) {
    //   return;
    // }

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);

    onChange(newValue);

    if (!isTargetValueDigit) {
      return;
    }
    
    const nextElementSibling =
    target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
    nextElementSibling.focus();
  }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key !== 'Backspace' || target.value !== '') {
      return;
    }

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  console.log("new", inputOnChange)

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
                  <SeqNum style={{color:"white", backgroundColor:"#8A2BE2"}}>2</SeqNum>
                  <div> ----- </div>
                  <SeqNum>3</SeqNum>
                  <div> ----- </div>
                  <SeqNum>4</SeqNum>
              </Seq>

              <div
                style={{
                  fontSize: "16px",
                  color: "#8A2BE2",
                  fontWeight: "600",
                  marginBottom: "20px",
                  textAlign: "center",
                }}>
                Input OTP
              </div>

              <Inputs>
                    {valueItems.map((digit, idx) => (
                      <Input 
                        type="text" 
                        placeholder="-"
                        key={idx}
                        pattern='/d{1}'
                        maxLength={valueLength}
                        value={digit}  

                        onChange={(e) => inputOnChange(e, idx)}
                        onKeyDown={inputOnKeyDown}
                        />
                    ))}
              </Inputs>

              <Button>Enter</Button>

              <p
                style={{
                  fontSize: "10px",
                  color: "#8A2BE2",
                  textAlign: "center",
                }}>Resend OTP?</p>
            
          </Form>
        </Left>

      </Hold>
    </Body>


    </div>
  )
}

export default InputOTP;

const SeqNum = styled.h6`
padding: 4px 7px;
border-radius:50%;
text-align:center;
border: 1px solid #8A2BE2;
color: #8A2BE2;
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
  width: 400px;
`;

const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 90%;
  height: 40px;
  background: #8A2BE2;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  margin-top: 5px;

  :hover {
    background-color: transparent;
    border: 1px solid #8A2BE2;
    color: #8A2BE2;
  }
`;

const Input = styled.input`
  width: 35px;
  height: 35px;
  box-shadow: 0 0 2px #8A2BE2;
  margin-bottom: 20px;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  // padding-left: 10px;
  border: none;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  p {
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

const Inputs = styled.div`
  width: 90%;
  max-width: 360px;
  height: 40px;
  column-gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
//   border: none;
//   box-shadow: 0 0 2px #8A2BE2;
//   margin-bottom: 20px;
//   border-radius: 7px;
//   padding-left: 10px;

//   p {
//     font-size: 10px;
//   }

//   @media screen and (max-width: 425px) {
//     box-shadow: none;
//     border-bottom: 1px solid #567e22;
//   }
//   @media screen and (max-width: 768px) {
//     height: 35px;
//   }
`;

const Form = styled.form`
  width: 270px;
  height: 200px;
  box-shadow: 0 0 3px #8A2BE2;
  border-radius: 10px 0 10px 0;
  padding: 30px;
//   padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    padding: 20px;
    // padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
  }

  @media screen and (max-width: 375px) {
    width: 285px;
    // padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
  }
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
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