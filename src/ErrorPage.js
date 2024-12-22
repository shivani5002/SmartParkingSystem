import styled from 'styled-components';

const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  flex-direction: column;
  text-align: center;
  padding: 0 20px; /* Add padding for small screens */

  @media (max-width: 768px) {
    padding: 0 10px; /* Adjust padding for small screens */
  }
`;

const ErrorPageTitle = styled.h1`
  margin-top: 0; /* Remove margin-top for proper centering */
`;

const ErrorPageSubtitle = styled.h3`
  margin-top: 20px; /* Space between title and subtitle */
`;

export function ErrorPage() {
  return (
    <ErrorPageContainer>
      <ErrorPageTitle>404 Error: Page Not Found</ErrorPageTitle>
      <ErrorPageSubtitle>The page you're looking for doesn't exist.</ErrorPageSubtitle>
    </ErrorPageContainer>
  );
}
