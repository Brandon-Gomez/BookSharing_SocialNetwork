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
import CreatePostView from "../views/createpost_view.vue";
import LikesProfileView from "../views/likesprofile_view.vue";
import PdfPreviewView from "../views/pdfpreview_view.vue";
import FollowView from "../views/follow_view.vue";
import CategoryView from '../views/category_view.vue';
import Page404 from '../views/404_view.vue';
import CategoriesView from '../views/categories_view.vue';
import AdminDashboardView from '../views/admin/dashboard_view.vue';
import AdminUsersListView from '../views/admin/users-list_view.vue';
import AdminUserCreateView from '../views/admin/user-create_view.vue';
import AdminUserEditView from '../views/admin/user-edit_view.vue';
import AdminPostsListView from '../views/admin/posts-list_view.vue';
import AdminPostCreateView from '../views/admin/post-create_view.vue';
import AdminPostEditView from '../views/admin/post-edit_view.vue';
import AdminCategoriesList from '../views/admin/categories-list_view.vue';


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
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: ProfileView,
    props: true
  },
  {
    path : '/profile/:username/create-post',
    name: 'CreatePost',
    component: CreatePostView,
    props: true,
  },
  {
    path: '/profile/:username/edit-account',
    name: 'EditProfile',
    component: EditProfileView,
    props: true
  },
  {
    path: '/posts/:postId',
    name: 'PostView',
    component: PostView,
  },
  {
    path: '/posts/:postId/edit-post',
    name: 'EditPost',
    component: EditPostView,
    props: true
  },
  {
    path: '/pdf-preview',
    name: 'PdfPreview',
    component: PdfPreviewView,
  },
  {
    path: '/profile/:username/likes',
    name: 'LikesProfile',
    component: LikesProfileView,
  },
  {
    path: '/follow',
    name: 'FollowView',
    component: FollowView,
  },
  {
    path: '/category/:categoryId',
    name: 'CategoryView',
    component: CategoryView,
    props: true
  },
  {
    path : '/categories',
    name: 'CategoriesView',
    component: CategoriesView,
  }

];

// Rutas para administradores
const adminRoutes = [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboardView,
  },
  {
    path: '/admin/users-list',
    name: 'AdminUsersList',
    component: AdminUsersListView,
  },
  {
    path: '/admin/user-create',
    name: 'AdminUserCreate',
    component: AdminUserCreateView,
  },
  {
    path: '/admin/user-edit/:userId',
    name: 'AdminUserEdit',
    component: AdminUserEditView,
    props: true
  },
  // post
  {
    path: '/admin/posts-list',
    name: 'AdminPostsList',
    component: AdminPostsListView,
  },
  {
    path: '/admin/post-create',
    name: 'AdminPostCreate',
    component: AdminPostCreateView,
  },
  {
    path: '/admin/post-edit/:postId',
    name: 'AdminPostEdit',
    component: AdminPostEditView,
    props: true
  },
  {
  path: '/admin/categories-list',
  name: 'AdminCategoriesList',
  component: AdminCategoriesList
}
];

// Unimos todas las rutas
const routes = [
  ...visitorRoutes,
  ...userRoutes,
  ...adminRoutes,
  // Redirección por defecto
  { path: '/:pathMatch(.*)*', 
    name: 'Page404',
    component: Page404,
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;