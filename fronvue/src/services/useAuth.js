import apiClient from './ApiService';

export async function loginUser({ email, password, router }) {
  try {
    const response = await apiClient.post('/login', { email, password });
    const username = response.data.username;
    const is_admin = response.data.is_admin;

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('isAdmin', is_admin);
    localStorage.setItem('username', username);

    if (is_admin) {
      router.push(`/admin/dashboard`).then(() => window.location.reload());
    } else {
      router.push(`/profile/${username}`).then(() => window.location.reload());
    }
  } catch (error) {
    console.error('Error en el login:', error.response);
    throw error;
  }
}

export function logoutUser(router) {
  localStorage.removeItem('authToken');
  localStorage.removeItem('isAdmin');
  localStorage.removeItem('username');
  router.push('/').then(() => window.location.reload());
}