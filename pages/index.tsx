import type { NextPage } from 'next';
import { LiveCount } from '../components/LiveCount';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
	return (
		<Layout>
			<LiveCount />
		</Layout>
	);
};

export default Home;
