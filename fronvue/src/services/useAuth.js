import apiClient from './ApiService';
const loginUser = async ({ email, password, router }) => {
  try {
    const response = await apiClient.post('/login', { email, password });
    const username = response.data.username;
    const is_admin = response.data.is_admin;

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('isAdmin', is_admin);
    localStorage.setItem('username', username);
    localStorage.setItem('userData', JSON.stringify(response.data.userData));
    if (is_admin) {
      router.push(`/admin/dashboard`).then(() => window.location.reload());
    } else {
      router.push(`/profile/${username}`).then(() => window.location.reload());
    }
  } catch (error) {
    console.error('Error en el login:', error.response);
    throw error;
  }
};

const logoutUser = (router) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('isAdmin');
  localStorage.removeItem('username');
  localStorage.removeItem('userData');
  router.push('/').then(() => window.location.reload());
};

// googleAuth
const googleAuth = async ({ email, name, imageUrl, router }) => {
  try {
    const response = await apiClient.post('/googleAuth', { email, name, imageUrl });
    const username = response.data.username;
    const is_admin = response.data.is_admin;

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('isAdmin', is_admin);
    localStorage.setItem('username', username);
    localStorage.setItem('userData', JSON.stringify(response.data.userData));
    if (is_admin) {
      router.push(`/admin/dashboard`).then(() => window.location.reload());
    } else {
      router.push(`/profile/${username}`).then(() => window.location.reload());
    }
  } catch (error) {
    console.error('Error en la autenticación de Google:', error.response);
    throw error;
  }
};

// check if user is logged in
const isLoggedIn = () => {
  return !!localStorage.getItem('authToken') && !!localStorage.getItem('username');
};

export { loginUser, logoutUser, googleAuth, isLoggedIn };