import React from "react";
import styled from "styled-components";
import useHomeScreen from "./useHomeScreen.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CollectionSelection = styled.select`
  margin-bottom: 1rem;
`;

const PrizeIdInput = styled.input`
  margin-bottom: 1rem;
`;

const PrizeTitleInput = styled.input`
  margin-bottom: 1rem;
`;

const PrizeDescInput = styled.textarea`
  margin-bottom: 1rem;
`;

const PrizeTypeSelection = styled.select`
  margin-bottom: 1rem;
`;

const PrizeTierSelection = styled.select`
  margin-bottom: 1rem;
`;

const PrizeClaimTypeSelection = styled.select`
  margin-bottom: 1rem;
`;

const Option = styled.option``;

const Button = styled.button`
  margin-bottom: 1rem;
`;

const Home = () => {
  const {
    collectionError,
    handleCollectionChange,
    prizeIdError,
    handlePrizeIdChange,
    prizeTitleError,
    handlePrizeTitleChange,
    prizeDescError,
    handlePrizeDescChange,
    prizeTierError,
    handlePrizeTierChange,
    prizeTypeError,
    handlePrizeTypeChange,
    prizeClaimTypeError,
    handlePrizeClaimTypeChange,
    handleAddPrizeToDB,
    handleLogout,
  } = useHomeScreen();

  return (
    <Container>
      <Wrapper>
        <CollectionSelection onChange={handleCollectionChange}>
          <Option value="available-prizes">available-prizes</Option>
          <Option value="contest-prizes">contest-prizes</Option>
        </CollectionSelection>
        <PrizeIdInput
          placeholder="prizeId"
          onChange={handlePrizeIdChange}
        ></PrizeIdInput>
        <PrizeTitleInput
          placeholder="prizeTitle"
          onChange={handlePrizeTitleChange}
        ></PrizeTitleInput>
        <PrizeDescInput
          rows={20}
          cols={20}
          placeholder="prizeDesc"
          onChange={handlePrizeDescChange}
        ></PrizeDescInput>
        <PrizeTierSelection onChange={handlePrizeTierChange}>
          <Option value="bronze">bronze</Option>
          <Option value="silver">silver</Option>
          <Option value="gold">gold</Option>
          <Option value="platinum">platinum</Option>
          <Option value="diamond">diamond</Option>
        </PrizeTierSelection>
        <PrizeTypeSelection onChange={handlePrizeTypeChange}>
          <Option value="phone">phone</Option>
          <Option value="tablet">tablet</Option>
          <Option value="laptop">laptop</Option>
          <Option value="earbuds">earbuds</Option>
          <Option value="shirt">shirt</Option>
          <Option value="hoodie">hoodie</Option>
          <Option value="cash">cash</Option>
          <Option value="other">other</Option>
        </PrizeTypeSelection>
        <PrizeClaimTypeSelection onChange={handlePrizeClaimTypeChange}>
          <Option value="shipment">shipment</Option>
          <Option value="transfer">transfer</Option>
          <Option value="none">none</Option>
        </PrizeClaimTypeSelection>
        <Button
          onClick={handleAddPrizeToDB}
          disabled={
            collectionError ||
            prizeIdError ||
            prizeTitleError ||
            prizeDescError ||
            prizeTierError ||
            prizeTypeError ||
            prizeClaimTypeError
          }
        >
          Add Prize To DB
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
