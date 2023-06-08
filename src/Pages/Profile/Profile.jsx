import styled, { css } from 'styled-components';
import { Search } from 'lucide-react';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  color: var(--text-color);
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

const AboutMe = styled.div`
  position: relative;
  bottom: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;

    margin: 0;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;

    margin: 0;
  }
`;

const Sections = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;

  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
`;

const SectionTitle = styled.nav`
  font-weight: 600;

  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: #224abb;
  }
`;

const FilterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
  }
`;

const SearchWrapper = styled.div`
  position: relative;

  max-width: 50rem;
  min-width: 8rem;
`;

const SearchInput = styled.input`
  height: 1.5rem;

  padding: 0.5rem 1rem;
  margin-right: 0.5rem;

  width: 100%;

  color: var(--text-color);
  background-color: rgba(152, 152, 152, 0.2);

  border: none;
  border-radius: 0.8rem;

  &::placeholder {
    color: var(--text-color);
  }
`;

const SelectInput = styled.select`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;

  width: 9rem;
  height: 2.5rem;

  color: var(--text-color);
  background-color: rgba(152, 152, 152, 0.2);

  border: none;
  border-radius: 0.8rem;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: 1.5rem;
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 4rem;
  height: 2.5rem;

  color: var(--text-color);
  background-color: rgba(152, 152, 152, 0.2);

  border: none;

  border-radius: ${(props) =>
    props.roundedSide === 'left' ? '0.4rem 0 0 0.4rem' : '0 0.4rem 0.4rem 0'};
`;

const Profile = () => {
  const pageSections = [
    {
      title: 'Favorited',
    },
    {
      title: 'Traded',
    },
    {
      title: 'Offers',
    },
    {
      title: 'Created',
    },
    {
      title: 'My Collection',
    },
  ];

  return (
    <PageWrapper>
      <main>
        <ProfileWrapper>
          <ProfileBanner />
          <ProfileImage />
          <AboutMe>
            <h2>John Doe</h2>
            <h3>Discover my work by clicking on collection!</h3>
          </AboutMe>
        </ProfileWrapper>

        <Sections>
          {pageSections.map((section) => (
            <SectionTitle>{section.title}</SectionTitle>
          ))}
        </Sections>

        <FilterMenu>
          <div>
            <SearchWrapper>
              <SearchInput type="text" placeholder="Search" />
              <SearchIcon />
            </SearchWrapper>

            <SelectInput>
              <option value={null} selected disabled>
                Single Items
              </option>
            </SelectInput>

            <Button roundedSide={'left'}>Pasta</Button>
            <Button roundedSide={'right'}>Menu</Button>
          </div>
        </FilterMenu>
      </main>
    </PageWrapper>
  );
};

export default Profile;

