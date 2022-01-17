import './styles.scss';
import { useState, useEffect, useContext, useCallback } from 'react';
import CustomInput from '../customInput';
import CustomCheckbox from '../customCheckbox';
import CustomButton from '../customButton'
import { AuthContext } from '../../auth/authContext';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {
	const { user } = useContext(AuthContext);
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [saveData, setSaveData] = useState(false);
	const [authProcess, setAuthProcess] = useState(false);

	const handleLogin = (event) => setLogin(event.target.value);
	const handlePassword = (event) => setPassword(event.target.value);
	const handleCheckbox = () => setSaveData(isSave => !isSave);

	const register = useCallback(async () => {
		try {
			setAuthProcess(true)
			await createUserWithEmailAndPassword(getAuth(), login, password);
		}
		catch (error) {
			console.log('auth failed! - ', error)
		}
		finally {
			setAuthProcess(false)
		}
	}, [login, password])

	useEffect(() => { console.log('user', user) }, [user])

	return (
		<div className="root">
			<div className="authTitle">
				Authorization
			</div>
			<div className="interactionField">
				<CustomInput injectedStyle="authInput" value={login} onChange={handleLogin} placeholder="Login" />
				<CustomInput injectedStyle="authInput" value={password} onChange={handlePassword} placeholder="Password" type="password" />
				<div className="checkboxField">
					<CustomCheckbox value={saveData} onChange={handleCheckbox} />
					<label className="checkboxTitle">
						Remember me on next login
					</label>
				</div>
			</div>
			<CustomButton title="Sign In" injectedStyle="signButton" callback={register} isLoading={authProcess} />
		</div>
	)
}

export default Auth;