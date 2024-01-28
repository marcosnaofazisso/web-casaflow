import imageBanner from "./assets/img/new-casaflow-banner.png";
import playStore from "./assets/img/play_store.png";
import qrCode from "./assets/img/qrcode.jpeg";
import {
  AppDownloadContainer,
  BannerImage,
  ContentContainer,
  DownloadButton,
  FlexContainer,
  InfoText,
  MainContainer,
  QRCodeImage,
  StoreImage,
  StyledNavLink,
  Title,
} from "./styles";

export default function App() {
  const goToPlayStore = () => {
    const casaflowUrl =
      "https://play.google.com/store/apps/details?id=com.marcosviniciusferreira.casaflow";
    window.open(casaflowUrl, "_blank");
  };

  return (
    <MainContainer>
      <ContentContainer>
        <Title>CasaFlow</Title>
        <InfoText>
          Se você busca uma solução intuitiva, gratuita e fácil de usar para
          organizar suas finanças, encontrou o aplicativo perfeito - o CasaFlow!
        </InfoText>
      </ContentContainer>
      <FlexContainer>
        <AppDownloadContainer>
          <DownloadButton>Baixe o app grátis!</DownloadButton>
          <QRCodeImage
            src={qrCode}
            width={300}
            height={300}
            alt="QR Code do aplicativo CasaFlow"
          />
          <StoreImage
            src={playStore}
            width={280}
            height={"auto"}
            alt="QR Code do aplicativo CasaFlow"
            onClick={() => goToPlayStore()}
          />
        </AppDownloadContainer>
        <div>
          <BannerImage
            src={imageBanner}
            width={600}
            height={800}
            alt="Banner com a imagem do app CasaFlow"
          />
        </div>
      </FlexContainer>
      <StyledNavLink to="/deletar-conta">
        Tenho uma conta e desejo apagar meus dados
      </StyledNavLink>
    </MainContainer>
  );
}
