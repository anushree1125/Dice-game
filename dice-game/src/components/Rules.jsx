import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>If you get wrong guess then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
}
export default Rules;

const RulesContainer = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }
  .text {
    margin-top: 24px;
  }
`;
