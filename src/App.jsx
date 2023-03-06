import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing.page';

function App() {
	return (
			<Routes>
				{true ? (
					<>
						<Route path='/' element={<Landing />} />
					</>
				) : (
					<></>
				)}
			</Routes>
	);
}

export default App;
