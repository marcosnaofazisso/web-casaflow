import styled from "styled-components";

export const GradientBackground = styled.div`
  max-width: 100vw;
  height: 100vh;
  text-align: center;
  padding: 4rem 5rem 0 5rem;
  background: linear-gradient(to right, #3861c9 5%, #56cafb 95%);

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 50vw;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const InfoText = styled.span`
  display: block;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledInput = styled.input`
  padding: 1rem 3rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  margin-bottom: 1rem;
  color: #fff;
  background: linear-gradient(to right, #3861c9 5%, #56cafb 95%);
  padding: 1rem;
  border-radius: 5px;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;

export const SuccessMessage = styled.div``;

export const GradientBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  background: linear-gradient(to right, #fff 10%, #eaedf2);

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;
