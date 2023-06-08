import Header from '../../Ui/Components/Header';
import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  border: 1px solid red;

  background-color: var(--background-color);
`;

const ProfileWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileBanner = styled.div`
  width: 100%;
  height: 18rem;

  background-color: darkblue;
`;

const ProfileImage = styled.div`
  position: relative;
  bottom: calc(10rem / 2);

  width: 10rem;
  height: 10rem;

  background-color: darkgray;

  border-radius: 50%;
`;

const Profile = () => {
  return (
    <PageWrapper>
      <Header />
      <main>
        <ProfileWrapper>
          <ProfileBanner />
          <ProfileImage />
        </ProfileWrapper>
      </main>
    </PageWrapper>
  );
};

export default Profile;

