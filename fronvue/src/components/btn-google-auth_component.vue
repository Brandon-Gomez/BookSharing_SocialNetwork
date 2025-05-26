<script setup lang="ts">
import { GoogleSignInButton, CredentialResponse } from "vue3-google-signin";
import apiClient from "@/services/ApiService";
import { useRouter } from "vue-router";

const router = useRouter();

const handleLoginSuccess = async (response: CredentialResponse) => {
  if (!response || !response.credential) {
    console.error("No se recibió credencial de Google");
    return;
  }
  const accessToken = response.credential;
  console.log("Access Token:", accessToken);
  try {
    // Envía el token al backend para validación o creación de sesión
    const res = await apiClient.post("/google-auth", { token: accessToken });
    localStorage.setItem("authToken", res.data.token);
    // Redirige al usuario (por ejemplo, a la página de inicio)
    router.push("/");
  } catch (error) {
    console.error("Error durante la autenticación con Google", error);
  }
};

const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
  <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>