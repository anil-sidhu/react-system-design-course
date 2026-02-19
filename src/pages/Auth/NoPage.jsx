import { useNavigate } from "react-router-dom";

function NoPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404</h1>
      <h2>Page Not found</h2>
      {/* <p>You do not have permission to view this page.</p> */}
      <button onClick={() => navigate("/login")}>
        Go to Home
      </button>
    </div>
  );    
}

export default NoPage;
