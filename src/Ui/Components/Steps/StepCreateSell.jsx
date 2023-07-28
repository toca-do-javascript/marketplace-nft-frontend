import styled from 'styled-components';

const CardStepCreateSellSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const ImgCardStep = styled.div`
  padding: 1.2rem 1.4rem;
  background-color: #2e2e2e;
  border-radius: 50%;
  color: #e603e6;
`;

const TitleCardStep = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #fff;
`;

const DescriptionCardStep = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: .9rem;
  color: #fff;
  max-width: 20ch;
  text-align: center;
`;

const StepCreateSell = ({ icon, title, description }) => {
  const IconComponent = icon;

  return (
    <CardStepCreateSellSection>
      <ImgCardStep>
        <IconComponent size={28} /> 
      </ImgCardStep>
      <TitleCardStep>{title}</TitleCardStep> 
      <DescriptionCardStep>{description}</DescriptionCardStep>
    </CardStepCreateSellSection>
  );
};


export default StepCreateSell;
