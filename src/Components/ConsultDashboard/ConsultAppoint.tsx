import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ConsultAppointment = () => {
  const [quick, setQuick] = React.useState(false);

  const toggle2 = () => {
    setQuick(!quick);
  };

  return (
    <div style={{ position: "relative" }}>
      {quick ? (
        <>
          <Bodyy>
            <div></div>

            <Quickk>
              <div
                style={{
                  zIndex: "500",
                  fontSize: "25px",
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  cursor: "pointer",
                }}
                onClick={toggle2}
              >
                <AiOutlineClose />
              </div>

              <Topp>
                <Save>Re-Schedule</Save>
                <Enter>Re-Schedule Appointment</Enter>

                {/* <Label>Select Specialist</Label>
                 <Select name="" id="">
                <option value="">Click To Select</option>
                </Select> */}

                <Tap>
                  <Label>Reason (Optional)</Label>

                  <Here1 placeholder="" />
                </Tap>

                <Tap>
                  <Label>Date</Label>

                  <Here type="date" placeholder="" />
                </Tap>

                <Tap>
                  <Label>Time</Label>

                  <Here type="time" placeholder="" />
                </Tap>
              </Topp>

              <Proceed>Send Re-Schedule</Proceed>
            </Quickk>
          </Bodyy>
        </>
      ) : null}

      <Body>
        <Contain>
          {/* <Fund>
        <div></div>

        <Button>
            <Pay onClick={toggle2}>Book Appointment</Pay>
        </Button>
    </Fund> */}

          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            Appointments
          </div>

          <Top>
            <Names
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#000000",
                width: "5%",
              }}
            >
              S/N
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Patient
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Patient's Name
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Diagnosis
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Date & Time
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Accept
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Decline
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Re-Schedule
            </Names>
          </Top>

          <Top>
            <Names style={{ width: "5%" }}>1</Names>
            <Names>
              <Name src="/images/avatar.png" />
            </Names>
            <Names>Allison Jordan</Names>
            <Names>Eyes Issues</Names>
            <Names>03-13/01:00am</Names>

            <Names style={{}}>
              <Namees>Accept</Namees>
            </Names>

            <Names style={{}}>
              <Namees style={{ backgroundColor: "rgba(123, 126, 126, 0.992)" }}>
                Decline
              </Namees>
            </Names>

            <Names style={{}}>
              <Namees style={{ backgroundColor: "#000000" }} onClick={toggle2}>
                Re-Schedule
              </Namees>
            </Names>
          </Top>

          <Top>
            <Names style={{ width: "5%" }}>1</Names>
            <Names>
              <Name src="/images/avatar.png" />
            </Names>
            <Names>Obi Shola</Names>
            <Names>Lens Request</Names>
            <Names>03-13/02:00pm</Names>

            <Names style={{}}>
              <Namees>Accept</Namees>
            </Names>

            <Names style={{}}>
              <Namees style={{ backgroundColor: "rgba(123, 126, 126, 0.992)" }}>
                Decline
              </Namees>
            </Names>

            <Names style={{}}>
              <Namees style={{ backgroundColor: "#000000" }} onClick={toggle2}>
                Re-Schedule
              </Namees>
            </Names>
          </Top>

          <MobTop
          // style={{backgroundColor:"#a8ff37"}}
          >
            <Amount>
              <Trans>
                <Name src="/images/avatar.png" />
              </Trans>
              <Trans style={{ color: "rgba(123, 126, 126, 0.992)" }}>
                Eyes Issues
              </Trans>
            </Amount>

            <Amount>
              <Trans>Dr. Allison Jordan</Trans>
              <Trans style={{ color: "rgba(123, 126, 126, 0.992)" }}>
                03-13/01:00am
              </Trans>
            </Amount>

            <Amount style={{ marginTop: "6px" }}>
              <Names style={{}}>
                <Namees style={{ width: "100%" }}>Accept</Namees>
              </Names>

              <Names>
                <Namees
                  style={{
                    backgroundColor: "rgba(123, 126, 126, 0.992)",
                    width: "100%",
                  }}
                >
                  Decline
                </Namees>
              </Names>

              <Names style={{}}>
                <Namees
                  style={{ backgroundColor: "#000000", width: "100%" }}
                  onClick={toggle2}
                >
                  Re-Schedule
                </Namees>
              </Names>
            </Amount>
          </MobTop>

          <MobTop
          // style={{backgroundColor:"#a8ff37"}}
          >
            <Amount>
              <Trans>
                <Name src="/images/avatar.png" />
              </Trans>
              <Trans style={{ color: "rgba(123, 126, 126, 0.992)" }}>
                Lens Request
              </Trans>
            </Amount>

            <Amount>
              <Trans>Dr. Obi Shola</Trans>
              <Trans style={{ color: "rgba(123, 126, 126, 0.992)" }}>
                03-10/11:00am
              </Trans>
            </Amount>

            <Amount style={{ marginTop: "6px" }}>
              <Names style={{}}>
                <Namees style={{ width: "100%" }}>Accept</Namees>
              </Names>

              <Names style={{}}>
                <Namees
                  style={{
                    backgroundColor: "rgba(123, 126, 126, 0.992)",
                    width: "100%",
                  }}
                >
                  Decline
                </Namees>
              </Names>

              <Names style={{}}>
                <Namees
                  style={{ backgroundColor: "#000000", width: "100%" }}
                  onClick={toggle2}
                >
                  Re-Schedule
                </Namees>
              </Names>
            </Amount>
          </MobTop>
        </Contain>
      </Body>
    </div>
  );
};

export default ConsultAppointment;

// const Fund = styled.div``;

// const Fund = styled.div``;

// const Fund = styled.div``;

// const Fund = styled.div``;

// const Fund = styled.div``;

const Trans = styled.h5`
  font-size: 13px;
  font-weight: 700;
`;

const Amount = styled.div`
  width: 90%;
  display: flex;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;

  @media screen and (max-width: 320px) {
    margin-left: 15px;
  }
`;

const MobTop = styled.div`
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    border: none;
    // border-radius: 12px;
    // border-bottom: 2px solid #a8ff37;
    border-bottom: 1px solid rgba(123, 126, 126, 0.992);
    // border-top: 1px solid #000000;
    margin-top: 20px;
    padding-bottom: 15px;
  }
`;

const Namees = styled.button`
  // padding: 10px 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: #f4511e;
  // background-color: rgba(123, 126, 126, 0.992);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;

  :hover {
    // border: 1px solid #000000;
    background-color: #000000;
    // color: #000000;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 375px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

const Name = styled.img`
  width: 40px;
  height: 40px;
  // border: 1px solid rgba(123, 126, 126, 0.992);
  border-radius: 50%;
`;

const Proceed = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  color: white;
  background-color: #000000;
  margin-bottom: 30px;
  border: none;
  border-radius: 7px 7px 7px 0;
  font-weight: 700;
`;

const Here1 = styled.textarea`
  width: 96%;
  height: 100px;
  border-radius: 7px 7px 7px 0;
  padding-left: 10px;
`;

const Here = styled.input`
  width: 96%;
  height: 42px;
  border-radius: 7px 7px 7px 0;
  padding-left: 10px;
`;

const Label = styled.div`
  margin-top: 20px;
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 700;
  // color: gray;
`;

const Tap = styled.div`
  /* display: flex;
flex-direction: column; */
`;

const Enter = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 15px;
`;

const Save = styled.div`
  // color: #a8ff37;
  font-size: 23px;
  font-weight: 700;
`;

const Topp = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const Quickk = styled.div`
  width: 300px;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 260px;
  }
`;

const Bodyy = styled.div`
  width: calc(100% - 250px);
  height: calc(100vh - 70px);
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #00000095;
  z-index: 300;
  transition: all 350ms ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Names = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: rgba(123, 126, 126, 0.992);
  width: 12%;
  height: 40px;
  display: flex;
  // justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 30%;
  }
`;

const Top = styled.div`
  width: 95%;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #eaeaea;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Contain = styled.div`
  width: 95%;
  height: 100%;
  background-color: white;
  border-radius: 10px 0 10px 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  // justify-content: center;
  margin-top: 20px;
  padding-bottom: 30px;

  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  // align-items: center;
`;
