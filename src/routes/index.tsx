import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import NotFound from '../components/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Catalog />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
