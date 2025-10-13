import {useAuth} from '../../context/AuthContext.jsx';


const Signin = () => {
    const { session } = useAuth();
    console.log(session);

    
    return(
        <>
            <h1 className="landing-header">Signin Page</h1>
        </>
    )
}

export default Signin;