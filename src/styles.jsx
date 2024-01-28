import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.div`
  max-width: 100%;
  height: 100%;
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

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
`;

export const InfoText = styled.span`
  display: block;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  border-radius: 10px;
  justify-content: center;
  background: linear-gradient(to right, #fff 10%, #eaedf2);
`;

export const AppDownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  align-items: center;
  margin-right: 20rem;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-top: 2rem;
  }
`;

export const DownloadButton = styled.span`
  margin-bottom: 1rem;
  color: #fff;
  background: linear-gradient(to right, #3861c9 5%, #56cafb 95%);
  padding: 1rem;
  border-radius: 5px;
  font-size: 2rem;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    width: 80%;
    height: auto;
  }
`;

export const QRCodeImage = styled.img`
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    width: 80%;
    height: auto;
  }
`;

export const StoreImage = styled.img`
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 2px;
`;

export const BannerImage = styled.img`
  margin-right: 10rem;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    width: 80%;
    height: auto;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  padding: 2rem;

  &:hover {
    font-weight: bold;
  }
`;
