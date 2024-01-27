import qrCode from "./assets/img/qrcode.jpeg";
import imageBanner from "./assets/img/new-casaflow-banner.png";
import playStore from "./assets/img/play_store.png";

export default function App() {
  const goToPlayStore = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.marcosviniciusferreira.casaflow;";
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        height: "100%",
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
          Se você busca uma solução intuitiva, gratuita e fácil de usar para
          organizar suas finanças, encontrou o aplicativo perfeito - o CasaFlow!
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          borderRadius: "10px",
          justifyContent: "center",
          background: "linear-gradient(to right, #FFF 10%, #EAEDF2)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "8rem",
            alignItems: "center",
            marginRight: "20rem",
          }}
        >
          <span
            style={{
              marginBottom: "1rem",
              color: "#FFF",
              background: "linear-gradient(to right, #3861C9 5%, #56CAFB 95%)",
              padding: "1rem",
              borderRadius: "5px",
              fontSize: "2rem",
            }}
          >
            Baixe o app gratis!
          </span>
          <img
            src={qrCode}
            width={300}
            height={300}
            alt="QR Code do aplicativo CasaFlow"
            style={{ borderRadius: "10px" }}
          />
          <img
            src={playStore}
            width={280}
            height={"auto"}
            alt="QR Code do aplicativo CasaFlow"
            onClick={() => goToPlayStore()}
            style={{
              cursor: "pointer",
              marginTop: "1rem",
              borderRadius: "2px",
            }}
          />
        </div>
        <div>
          <img
            src={imageBanner}
            style={{ marginRight: "10rem" }}
            width={600}
            height={800}
            alt="Banner com a imagem do app CasaFlow"
          />
        </div>
      </div>
      {/* <NavLink to="/deletar-conta">Deletar Conta</NavLink> */}
    </div>
  );
}
