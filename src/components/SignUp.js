import UserForm from "./UserForm";

function SignUp(){
    return(
        <div className="Content">
            <UserForm
                message="Register an Account"
                buttonText="Sign Up"/>
        </div>
    )
}

export default SignUp;
