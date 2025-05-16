import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/home_view.vue";
import LoginView from '../views/login_view.vue';
import RegisterView from '../views/register_view.vue';
import ForgotPassword from "../views/forgotpassword_view.vue";
import ResetPassword from "../views/resetpassword_view.vue";
import ProfileView from "../views/profile_view.vue";
import EditProfileView from "../views/editprofile_view.vue";
import PostView from "../views/post_view.vue";
import EditPostView from "../views/editpost_view.vue";
import LikeView from "../views/like_view.vue";
import PdfPreviewView from "../views/pdfpreview_view.vue";
import FollowView from "../views/follow_view.vue";
import DashboardView from '../views/admin/dashboard_view.vue';
import UsersListView from '../views/admin/users-list_view.vue';
import UserCreateView from '../views/admin/user-create_view.vue';
import UserEditView from '../views/admin/user-edit_view.vue';
import PostsListView from '../views/admin/posts-list_view.vue';
import PostCreateView from '../views/admin/post-create_view.vue';

// Rutas para visitantes (no autenticados)
const visitorRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresAuth: false, requiresAdmin: false, onlyVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { requiresAuth: false, requiresAdmin: false, onlyVisitor: true }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { requiresAuth: false, requiresAdmin: false, onlyVisitor: true }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: { requiresAuth: false, requiresAdmin: false, onlyVisitor: true }
  }
];

// Rutas para usuarios autenticados (no admin)
const userRoutes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true, requiresAdmin: false }
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: ProfileView,
    meta: { requiresAuth: true, requiresAdmin: false },
    props: true
  },
  {
    path: '/profile/:username/edit-account',
    name: 'EditProfile',
    component: EditProfileView,
    meta: { requiresAuth: true, requiresAdmin: false },
    props: true
  },
  {
    path: '/posts',
    name: 'PostView',
    component: PostView,
    meta: { requiresAuth: true, requiresAdmin: false }
  },
  {
    path: '/posts/:postId/edit-post',
    name: 'EditPost',
    component: EditPostView,
    meta: { requiresAuth: true, requiresAdmin: false },
    props: true
  },
  {
    path: '/pdf-preview',
    name: 'PdfPreview',
    component: PdfPreviewView,
    meta: { requiresAuth: true, requiresAdmin: false }
  },
  {
    path: '/likes',
    name: 'LikeView',
    component: LikeView,
    meta: { requiresAuth: true, requiresAdmin: false }
  },
  {
    path: '/follow',
    name: 'FollowView',
    component: FollowView,
    meta: { requiresAuth: true, requiresAdmin: false }
  }
];

// Rutas para administradores
const adminRoutes = [
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/users-list',
    name: 'UsersList',
    component: UsersListView,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/user-create',
    name: 'UserCreate',
    component: UserCreateView,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/user-edit/:userId',
    name: 'UserEdit',
    component: UserEditView,
    meta: { requiresAuth: true, requiresAdmin: true },
    props: true
  },
  // post
  {
    path: '/admin/posts-list',
    name: 'PostsList',
    component: PostsListView,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/post-create',
    name: 'PostCreate',
    component: PostCreateView,
    meta: { requiresAuth: true, requiresAdmin: true }
  },

];

// Unimos todas las rutas
const routes = [
  ...visitorRoutes,
  ...userRoutes,
  ...adminRoutes,
  // Redirección por defecto
  // { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Aquí puedes mejorar el guard para usar los meta correctamente
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken');
  console.log('Token:', token);
  // Aquí puedes decodificar el token y verificar roles si lo necesitas

  // Solo visitantes
  // if (to.meta.onlyVisitor && token) {
  //   return next({ name: 'Home' });
  // }

  // Rutas que requieren autenticación
  // if (to.meta.requiresAuth && !token) {
  //   return next({ name: 'Login' });
  // }

  // Rutas que requieren admin
  if (to.meta.requiresAdmin) {
    // Aquí deberías verificar si el usuario es admin (por ejemplo, decodificando el token)
    // Si no es admin, redirige a Home
    // Ejemplo:
    // if (!decoded.isAdmin) return next({ name: 'Home' });
  }

  next();
});

export default router;