import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../Global/Store";
import { useQuery } from "@tanstack/react-query";
import { GetOneUser } from "../../Api/Api";
import { TbCurrencyNaira } from "react-icons/tb";

const DashHomeTrans = () => {
  const getUser = useAppSelector((state: any) => state?.currentUser);

  const { data } = useQuery({
    queryKey: ["post"],
    queryFn: () => GetOneUser(getUser?._id),
  });
  console.log(data?.data?.history);

  return (
    <>
      <Body>
        <Contain>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            History
          </div>

          <Top>
            {/* <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000", width:"5%"}}>S/N</Names> */}
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Amount
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Trans ID
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Trans Type
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Time
            </Names>
            <Names
              style={{ fontSize: "14px", fontWeight: "700", color: "#000000" }}
            >
              Date
            </Names>
          </Top>

          {data?.data.history.map((el: any) => (
            <Top>
              <Names>
                <TbCurrencyNaira />
                {el.amount}
              </Names>

              <Names>
                {
                  // data?.data?.history[0].transactionRefrence
                  el.transactionRefrence
                }
              </Names>
              <Names>
                {
                  // data?.data?.history[0].transactionType
                  el.transactionType
                }
              </Names>
              <Names>Emergency</Names>

              <Names>
                {
                  // el.time
                  // data?.data?.history[0].time
                }
              </Names>

              <Names>
                {
                  el.date
                  // data?.data?.history[0].date
                }
              </Names>

            </Top>
          ))}

          {data?.data.history.map((el: any) => (
            
          <MobTop
          >
            <Amount>
              <Trans>
                <TbCurrencyNaira />
                {el.amount}
              </Trans>

              <Trans>
                {
                  // data?.data?.history[0].transactionRefrence
                  el.transactionRefrence
                }
              </Trans>
            </Amount>

            <Amount>
              <Trans style={{ color: "rgba(123, 126, 126, 0.992)", paddingBottom:"5px" }}>
                {
                  // data?.data?.history[0].transactionType
                  el.transactionType
                }
              </Trans>

              <Trans style={{ color: "rgba(123, 126, 126, 0.992)", paddingBottom:"5px" }}>
                {
                  el.date
                  // data?.data?.history[0].date
                }
              </Trans>

              <Trans style={{ color: "rgba(123, 126, 126, 0.992)", paddingBottom:"5px" }}>
                {
                  // data?.data?.history[0].transactionRefrence
                  el.time
                }
              </Trans>

            </Amount>
          </MobTop>
            
          ))}


          <NavLink style={{ textDecoration: "none", color: "" }} to="/transactions">
            <See>See All Transactions</See>
          </NavLink>

        </Contain>
      </Body>
    </>
  );
};

export default DashHomeTrans;

// const MobTop = styled.div``;

// const MobTop = styled.div``;

// const MobTop = styled.div``;

// const MobTop = styled.div``;

const Trans = styled.h5`
  font-size: 13px;
  font-weight: 700;

  @media screen and (max-width: 320px) {
    font-size: 11px; 
  }
`;

const Amount = styled.div`
  width: 90%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-left: 20px; */
`;

const MobTop = styled.div`
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    // flex-direction: column;
    border: none;
    border-radius: 12px;
    border-bottom: 2px solid rgba(123, 126, 126, 0.992);
    // border-bottom: 1px solid #F4511E;
    // border-top: 1px solid #000000;
    margin-bottom: 10px;
    // width: 85%;
    height: 40px;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    padding: 7px;
  }
`;

const See = styled.div`
  font-size: 12px;
  font-weight: 700;
  // font-weight: 650;
  // color: rgba(123, 126, 126, 0.992);
  // color: white;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 20px;
`;

const Names = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: rgba(123, 126, 126, 0.992);
  width: 12%;

  @media screen and (max-width: 768px) {
    width: 12%;
    font-size: 11px;
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
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  // align-items: center;
`;
