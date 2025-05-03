import { Outlet } from 'react-router-dom';
import { Header, Wrapper } from '../../components/layout';

const Home = () => {
	return (
		<Wrapper>
			<Header />
			<Outlet />
		</Wrapper>
	);
};

export default Home;