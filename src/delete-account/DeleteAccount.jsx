import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove } from "firebase/database";

import { firebaseConfig } from "../data/config";

import {
  GradientBackground,
  ContentContainer,
  Title,
  InfoText,
  GradientBox,
  StyledInput,
  StyledForm,
  StyledButton,
  SuccessMessage,
} from "./styles";

export default function DeleteAccount() {
  // eslint-disable-next-line no-unused-vars
  const [dataDeleted, setDataDeleted] = useState(false);
  const emailRef = useRef(null);

  const deleteUserData = (event) => {
    event.preventDefault();
    const emailId = btoa(emailRef.current.value);

    remove(ref(database, "users/" + emailId)).then(() => {
      remove(ref(database, "transactions/" + emailId))
        .then(() => {
          setDataDeleted(true);
          alert("Dados apagados com sucesso!");
        })
        .catch((error) => console.error(error));
    });
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  return (
    <GradientBackground>
      <ContentContainer>
        <Title>CasaFlow</Title>
        <InfoText>Deseja apagar seus dados? Sem problemas!</InfoText>
      </ContentContainer>
      <GradientBox>
        {!dataDeleted ? (
          <StyledForm onSubmit={deleteUserData}>
            <StyledInput
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Por favor, digite um e-mail valido"
            />
            <StyledButton type="submit">Apagar meus dados</StyledButton>
          </StyledForm>
        ) : (
          <SuccessMessage>Dados apagados com sucesso! ✅</SuccessMessage>
        )}
        <NavLink to="/" style={{ marginBottom: "2rem" }}>
          Voltar
        </NavLink>
      </GradientBox>
    </GradientBackground>
  );
}
