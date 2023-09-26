const Login = ({ handleAuth }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Chat App
      </h1>
      <h2
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.5rem",
          fontWeight: "normal",
          color: "#555",
        }}
      >
        Sign in to continue
      </h2>
      <h3
        style={{
          fontFamily: "sans-serif",
          fontSize: "1rem",
          fontWeight: "normal",
          color: "#777",
        }}
      >
        Chat with your friends and family
      </h3>
      <button
        style={{
          padding: "1rem",
          border: "none",
          borderRadius: "0.5rem",
          backgroundColor: "#4285f4",
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "1rem",
        }}
        className="login"
        onClick={handleAuth}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
