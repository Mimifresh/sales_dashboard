import {useAuth} from '../../context/AuthContext.jsx';
import { useActionState } from 'react';

const Signin = () => {
    const { session } = useAuth();
    console.log(session);


    return(
        <>
            <h1 className="landing-header">Signin Page</h1>
            <div>
                <form
                    action={useActionState}
                    aria-label='signin form'
                    aria-describedby='form-description'
                >
                    <div id='form-description' className='sr-only'>
                        Use this form to sign in to your account. Enter your email and password.
                    </div>
                    <h2 className='form-title'>Sign in</h2>
                    <p>Don't have an account yet? Sign up</p>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        required
                        aria-required='true'
                        placeholder=''
                    />
                    <input
                        id="password"
                        name="password"
                        type='password'
                        required
                        aria-required='true'
                        placeholder=''
                    />
                    <button
                        type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signin;