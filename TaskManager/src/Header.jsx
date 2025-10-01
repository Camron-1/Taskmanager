import './Header.css'

function Header(){

    return(
        <header className="app-header">
            <h1>Welcome to Task Manager</h1>
            <h3>Task Manager</h3>
            <p>This is a simple task management application that helps you organize your daily activities, track your progress, and stay productive. Create, edit, and manage your tasks with ease.</p>
            
            <h5>Please enter in your details to be logged in</h5>
           <h3> Email </h3>
           <email> <input type="email" placeholder="Enter your email" /> </email>
           <br></br>
           <h3> Password </h3>
           <password> <input type="password" placeholder="Enter your password" /> </password>
           <br></br>
           <br></br>
           <button>Login</button>
           <br></br>
           <br></br>
           <h3> Forgot your password? </h3>
           <button>Reset password</button>
            
            
        </header>
    );
}
export default Header