import './registration.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/authSlice';

const Signup = () => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		email: '',
		password: '',
		username: '',
	});
    //chatgpt
	const [error, setError] = useState(null); // State for error messages
    const [loading, setLoading] = useState(false); // State for loading indicator

    const auth = useSelector((state) => state.auth || {});
    const { isLoading, error: reduxError } = auth;

	//
	const handleSubmit = (e) => {
		e.preventDefault();
		// setLoading(true); // Start loading chatgpt

		//chatgpt 
		dispatch(register({
            username: state.username,
            password: state.password,
            email: state.email,
        }));
		
	};

	//


	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	console.log(state.email, state.password, state.username);
	return (
		<div className='signup-form'>
			<div className='signup-form__wrapper'>
				<form className='form' onSubmit={handleSubmit}>
					<h4>Sign up</h4>

					{error && <div className='form-error'>{error}</div>} {/* Display error message */}



					<div className='form-group'>
						<input
							type='text'
							placeholder='Enter Name'
							name='username'
							value={state.username}
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='email'
							name='email'
							value={state.email}
							placeholder='Enter Email'
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							name='password'
							value={state.password}
							placeholder='Enter Password'
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						{/* <button className='button'>Sign Up</button> */}

						<button className='button' type='submit' disabled={loading}>
                            {loading ? 'Signing Up...' : 'Sign Up'} {/* Show loading text */}
                        </button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
