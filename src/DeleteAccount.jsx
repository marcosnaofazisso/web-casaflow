import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

export default function DeleteAccount() {
  const [dataDeleted, setDataDeleted] = useState(false);
  const emailRef = useRef(null);

  const deleteUserData = (event) => {
    event.preventDefault();
    const userData = emailRef.current.value;
    console.log("deleteUserData ===>>", userData);
  };

  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          height: "950dvh",
          textAlign: "center",
          padding: "4rem 5rem 0 5rem",
          background: "linear-gradient(to right, #3861C9 5%, #56CAFB 95%)",
        }}
      >
        <div style={{ maxWidth: "50vw", margin: "0 auto" }}>
          <h1 style={{ fontSize: "5rem", color: "#FFF", marginBottom: "2rem" }}>
            CasaFlow
          </h1>
          <span
            style={{
              display: "block",
              fontSize: "2rem",
              color: "#FFF",
              marginBottom: "2rem",
            }}
          >
            Deseja apagar seus dados? Sem problemas!
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to right, #FFF 10%, #EAEDF2)",
          }}
        >
          {!dataDeleted && (
            <form
              onSubmit={deleteUserData}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                width: "40%",
              }}
            >
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Por favor, digite um e-mail valido"
                style={{
                  padding: "1rem 3rem",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                }}
              />
              <button
                type="submit"
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                  color: "#FFF",
                  background:
                    "linear-gradient(to right, #3861C9 5%, #56CAFB 95%)",
                  padding: "1rem",
                  borderRadius: "5px",
                  fontSize: "2rem",
                }}
              >
                Apagar meus dados
              </button>
            </form>
          )}
          <NavLink to="/" style={{ marginBottom: "2rem" }}>
            Voltar
          </NavLink>
        </div>
      </div>
    </>
  );
}
