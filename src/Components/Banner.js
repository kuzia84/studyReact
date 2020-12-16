import styled from "styled-components";
import bannerImg from "../images/banner.png";

export const Banner = styled.div`
  min-height: 200px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
