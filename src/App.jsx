import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import AnimatedRoutes from './components/routes/AnimatedRoutes';

const App = () => {
	return (
		<Suspense fallback={null}>
			<Router>
				<AnimatedRoutes />
			</Router>
		</Suspense>
	);
};

export default App;
