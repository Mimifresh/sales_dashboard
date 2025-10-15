import {useAuth} from '../../context/AuthContext.jsx';
import { useActionState } from 'react';

const Signin = () => {
    const { session } = useAuth();
    console.log(session);
    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            const email = formData.get('email');
            const password = formData.get('password');

        try {
            //2. Call our sign-in function
            // const {
            //   success,
            //   data,
            //   error: signInError,
            // } = await sign in function (email, password);

            if (signInError) {
            return new Error(signInError);
            }
            if (success && data?.session) {
            //Navigate to /dashboard
            return null;
            }
            return null;
        } catch (error) {
            console.error('Sign in error: ', error.message);
            return new Error('An unexpected error occurred. Please try again.');
        }
        }, null
    );

    return(
        <>
            <h1 className="landing-header">Signin Page</h1>
            <div>
                <form
                    action={submitAction}
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
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error ? 'signin-error' : undefined}
                        disabled={isPending}
                    />
                    <input
                        id="password"
                        name="password"
                        type='password'
                        required
                        aria-required='true'
                        placeholder=''
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error ? 'signin-error' : undefined}
                        disabled={isPending}
                    />
                    <button
                        type="submit"
                        aria-busy={isPending}
                    >
                        {isPending ? 'Signing in...' : 'Sign in'}
                    </button>
                    {error && (
                        <div
                            role="alert"
                            id="signin-error"
                            className="error-message"
                        >
                            {error.message}
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Signin;