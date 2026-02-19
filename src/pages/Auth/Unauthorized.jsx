import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>403</h1>
      <h2>Access Denied</h2>
      <p>You do not have permission to view this page.</p>
      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default Unauthorized;
