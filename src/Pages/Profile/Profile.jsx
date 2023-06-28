import { ProfileWrapper } from './styles/Profile/ProfileWrapper';
import { ProfileBanner } from './styles/Profile/ProfileBanner';
import { ProfileImage } from './styles/Profile/ProfileImage';
import { AboutMe } from './styles/Sections/AboutMe';
import { SectionTitle } from './styles/Sections/SectionTile';
import { Sections } from './styles/Sections/Sections';
import { PageWrapper } from './styles/PageWrapper';
import { Link, useLocation } from 'react-router-dom';

const Profile = ({ children }) => {
  const { pathname } = useLocation();

  const pageSections = [
    {
      title: 'Favorited',
      url: 'favorited',
    },
    {
      title: 'Traded',
      url: 'traded',
    },
    {
      title: 'Offers',
      url: 'offers',
    },
    {
      title: 'Created',
      url: 'created',
    },
    {
      title: 'My Collection',
      url: 'collection',
    },
  ];

  return (
    <PageWrapper>
      {/* header */}

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
            <SectionTitle
              key={section.title}
              style={{
                color:
                  (pathname.includes(section.url) ||
                    (section.url.toLowerCase() === 'offers' &&
                      pathname === '/profile')) &&
                  '#224abb',
              }}
            >
              <Link
                to={`/profile/${section.url}`}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                {section.title}
              </Link>
            </SectionTitle>
          ))}
        </Sections>

        {children}
      </main>

      {/* footer */}
    </PageWrapper>
  );
};

export default Profile;
