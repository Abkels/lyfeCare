import React from "react";
import styled from "styled-components";


const Heroo = () => {

    return (
        <>
            <Herro>
                <Black></Black>

                <Content>

                    <Create>Be Your Own <br />Emergency Response</Create>

                    <Mind>Safe Guard Yourself Against Health <br/>Emergencies..</Mind>

                    <Base>
                    {/* Saving.. to cater for payments in cases of health emergency.  */}
                    Giving lifeline to your deadline...
                    </Base>

                    {/* <p style={{fontWeight: "bold", color:"white", zIndex:"1"}}>LIFECARE... Giving lifeline to your deadline...</p> */}

                    <Get>Get Started Today</Get>

                </Content>
            </Herro>
        </>
    )
}

export default Heroo;

// const Content = styled.div``;

// const Herro = styled.div``;

const Mind = styled.div`
color: white;
font-size: 20px;
margin-top: 20px;
font-weight: 600;
z-index: 1;
`;

const Get = styled.button`
width: 160px;
height: 40px;
border: none;
background-color: blueviolet;
color: white;
border-radius: 7px;
z-index: 1;
font-weight: 600;
margin-top: 15px;
cursor: pointer;
:hover{
    background-color: #3a155c;
}
@media screen and (max-width: 347px) {
    width: 130px;
    height: 35px;
    font-size: 12px;
}
`;

const Base = styled.div`
font-size: 15px;
font-weight: 600;
color: white;
z-index: 1;
margin-top: 15px;
margin-bottom: 15px;
line-height: 27px;
@media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 23px;
}
@media screen and (max-width: 500px) {
    font-size: 13px;
    text-align: center
}
@media screen and (max-width: 347px) {
    font-size: 11px;
    line-height: 20px;
}
`;

const Create = styled.div`
font-size: 60px;
font-weight: 600;
color: white;
z-index: 1;
line-height:75px;
margin-top: 25px;

@media screen and (max-width: 768px) {
    font-size: 50px;
}
@media screen and (max-width: 500px) {
    font-size: 35px;
    text-align: center;
}
@media screen and (max-width: 347px) {
    font-size: 25px;
}
`;

const Content = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 80px;
@media screen and (max-width: 600px) {
    margin-left: 30px;
}
@media screen and (max-width: 500px) {
    align-items: center;
    margin-left: 0px;
}
`;

const Black = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #0e0e0e53;
`;

const Herro = styled.div`
width: 100%;
height: 100vh;
background-image: url("/images/docs.avif");
background-size: cover;
position: relative;
background-attachment: fixed;
@media screen and (max-width: 768px) {
    height: 500px;
}
@media screen and (max-width: 347px) {
    height: 380px;
}
`;