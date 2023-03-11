import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuroraBg from './components/extras/AuroraBg/AuroraBg.component';
import Landing from './pages/Landing.page';
import SignIn from './pages/auth/SignIn.page';
import SignUp from './pages/auth/SignUp.page';
import NotFound from './pages/NotFound.page';
import VerifyEmail from './pages/auth/VerifyEmail.page';
import ResetPassword from './pages/auth/ResetPassword.page';
import Zules from './pages/zulist/Zules.page';

function App() {
	var { user } = useSelector((state) => ({ ...state }));

	return (
		<>
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				{user ? (
					<>
						<Route path='/:username' element={<Zules />} />
					</>
				) : (
					<>
						<Route path='/signin' element={<SignIn />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/verify-email' element={<VerifyEmail />} />
						<Route path='/reset-password' element={<ResetPassword />} />
					</>
				)}
				<Route path='*' element={<NotFound />} />
			</Routes>
			<AuroraBg />
		</>
	);
}

export default App;
