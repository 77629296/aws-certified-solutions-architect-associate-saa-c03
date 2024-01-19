import type { NextPage } from 'next';

import Welcome from '@/components/Common/Welcome';
import useProfileStore from '@/store/useProfileStore';

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
