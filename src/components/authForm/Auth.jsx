import './styles.scss';
import { useState, useEffect, useContext, useCallback } from 'react';
import CustomInput from '../customInput';
import CustomCheckbox from '../customCheckbox';
import CustomButton from '../customButton'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Auth = ({ closeModal }) => {
	const [login, setLogin] = useState(localStorage.login || '');
	const [password, setPassword] = useState(localStorage.password || '');
	const [saveData, setSaveData] = useState(false);
	const [authProcess, setAuthProcess] = useState(false);
	const [authDone, setAuthDone] = useState(false);
	const [authFailed, setAuthFailed] = useState(false);

	const handleLogin = (event) => setLogin(event.target.value);
	const handlePassword = (event) => setPassword(event.target.value);
	const handleCheckbox = () => setSaveData(isSave => !isSave);

	const register = useCallback(async (_, isLogin = false) => {
		try {
			setAuthFailed(false)
			setAuthProcess(true)
			await (isLogin ? signInWithEmailAndPassword(getAuth(), login, password)
				: createUserWithEmailAndPassword(getAuth(), login, password))
				.then(() => {
					if (saveData) {
						localStorage.setItem('login', login);
						localStorage.setItem('password', password);
					}
					else {
						localStorage.removeItem('login');
						localStorage.removeItem('password');
					}
					setAuthDone(true)
				});
		}
		catch (error) {
			if (error.code
				&& error.code.includes('already-in-use')) {
				register('', true);
			}
			else {
				setAuthFailed(true);
				console.log('auth failed! - ', error)
			}
		}
		finally {
			setAuthProcess(false)
		}
	}, [login, password, saveData])

	useEffect(() => { closeModal && authDone && closeModal() }, [authDone])

	return (
		<div className="root">
			<div className="authTitle">
				Authorization
			</div>
			<div className="interactionField">
				<CustomInput injectedStyle="authInput" value={login} onChange={handleLogin} placeholder="Login" type="email" />
				<CustomInput injectedStyle="authInput" value={password} onChange={handlePassword} placeholder="Password" type="password" />
				<div className="checkboxField" onClick={handleCheckbox}>
					<CustomCheckbox value={saveData} />
					<label className="checkboxTitle" >
						Remember me on next login
					</label>
				</div>
			</div>
			{authFailed && <label className="authFailed">Authentication Failed</label>}
			<CustomButton title="Sign In" injectedStyle="signButton" callback={register} isLoading={authProcess} />
		</div>
	)
}

export default Auth;