import { UserProfile } from "../features/profile";
import '../assets/css/App.css'
import { LoginForm } from "../features/auth";
const App = () => {

  return (
    <div style={{ padding: "20px" }}>
      <LoginForm />
    </div>
  );
};

export default App;