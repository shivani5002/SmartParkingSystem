import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from 'react-router-dom';
import{ useState, useEffect } from "react";
import axios from "axios";

// Animation for floor card hover effect
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://png.pngtree.com/background/20230516/original/pngtree-night-cars-parked-in-an-empty-parking-lot-picture-image_2601314.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding-top: 100px;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  padding-top: 30px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FloorContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap */
  justify-content: center;
  gap: 40px; /* Space between cards */
  padding: 20px;
  margin-top:5%;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 25px;
    padding: 10px;
  }
`;

const FloorCard = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #ff6f61, #ff9a8b);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 200px; /* Adjusted width for smaller screens */
  height: 200px; /* Fixed height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid #fff;

  &:hover {
    animation: ${hoverAnimation} 0.5s forwards;
    background: linear-gradient(135deg, #ff9a8b, #ff6f61);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
    font-size: 1.4rem;
  }
`;

const FloorIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FloorText = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const FloorSelection = () => {
  const [floors, setFloors] = useState([]);

  useEffect(() => {
    const fetchFloors = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/smart-parking-system/floors");
        const floors = response.data
        setFloors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFloors();
  }, []);
  return (
    <PageContainer>
      <PageTitle>Choose Your Parking Floor</PageTitle>
      <FloorContainer>
      {floors.map((floor) => (
      <FloorCard key={floor} to={`/private/floor/${floor}`}>
        <FloorIcon icon={faBuilding} />
        <FloorText>Floor {floor}</FloorText>
      </FloorCard>
    ))}
      </FloorContainer>
    </PageContainer>
  );
}

