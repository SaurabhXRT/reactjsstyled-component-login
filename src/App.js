import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;

 
 
`;


const ContentContainer = styled.div`
  display: flex;
  padding: 20px;
  max-width: 1000px;
  margin: 30px auto;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin: 20px 0;
  }
`;

const ImageContainer = styled.div`
  width:50%;
  padding: 15px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width:100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const FormContainer = styled.div`
  width:50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width:100%;
  }
`;

const Form = styled.form`
  background-color: #fff;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const InputLabel = styled.label`
  text-align: left;
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;



const PasswordToggle = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50; /* Green color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;


const Login = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container isMobile={isMobile}>
      <ContentContainer>
        <ImageContainer>
          <Image
            src="https://res.cloudinary.com/dar4ws6v6/image/upload/v1698523538/6184159_3094352_bq4t2y.jpg"
            alt="Your Image"
          />
        </ImageContainer>
        <FormContainer>
          <Form>
            <h2>Login</h2>
            <InputLabel>Login ID</InputLabel>
            <Input type="text" placeholder="Enter your Login ID" />
            <InputLabel>Password</InputLabel>
            <PasswordWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <PasswordToggle onClick={togglePasswordVisibility}>
                {showPassword ? '🙈' : '👁️'}
              </PasswordToggle>
            </PasswordWrapper>
           
            <InputLabel>
              <input type="checkbox" /> Remember Me
            </InputLabel>
          
            <InputLabel>
              <input type="checkbox" /> I agree  <a href="/"  style={{ textDecoration: 'none', color: 'green' }}>to terms and condition</a>
            </InputLabel>
            <p>
              <a href="/"  style={{ textDecoration: 'none', color: 'green' }}>Change Password</a>
            </p>
            <Button type="submit">Submit</Button>
            <p>
              dont have an account?  <a href="/"  style={{ textDecoration: 'none', color: 'green' }}>Register here</a>
            </p>
          </Form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
