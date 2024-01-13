import type { NextPage } from 'next';
import useProfileStore from '@/store/useProfileStore';
import Welcome from '@/components/Common/Welcome';

const Home: NextPage = () => {
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const loggedOut = !currentProfile;
  return (
    <>
      {loggedOut ? <Welcome /> : null}
    </>
  );
};

export default Home;
