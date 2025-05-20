import { postModel } from "../models/post_model.js";
import { userModel } from "../models/user_model.js";
import { uploadBookToFirebase } from "./firebaseupload_controller.js";

const createMyPost = async (req, res) => {
  const { title, description, category_id } = req.body;

  const user = await userModel.findUserByEmail(req.email);
  const userId = user.id;

  const imagePost = req.files?.images || [];
  const pdf = req.files?.pdf || [];

  try {
    if (imagePost.length === 0 || pdf.length === 0) {
      return res.status(400).json({ message: "Se requieren una imagen y un archivo PDF." });
    }

    const imageUrl = await uploadBookToFirebase(imagePost[0]); 
    const pdfUrl = await uploadBookToFirebase(pdf[0]);

    const newPost = await postModel.addPost(userId, title, description, imageUrl, pdfUrl, category_id);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al crear la publicación:", error);
    res.status(500).json({ message: "Error al crear la publicación" });
  }
};

// Editar una publicación
const editPost = async (req, res) => {
  const postId = req.params.id;
  const { title, description,category_id } = req.body;
  const imagePost = req.files?.images || [];
  const pdf = req.files?.pdf || [];

  try {
    // Obtenemos el post existente para acceder a los valores actuales
    const existingPost = await postModel.getPostById(postId);

    // Inicializamos las URLs con las actuales, que solo cambiarán si hay nuevos archivos
    let imageUrls = existingPost.image; // Mantiene la imagen existente
    let pdfUrl = existingPost.pdf_file; // Mantiene el PDF existente

    if (imagePost.length > 0) {
      imageUrls = await uploadBookToFirebase(imagePost[0]);
    }
    if (pdf.length > 0) {
      pdfUrl = await uploadBookToFirebase(pdf[0]);
    }
    const updatedPost = await postModel.editPost(postId, title, description, imageUrls, pdfUrl, category_id);
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error al editar la publicación:", error);
    res.status(500).json({ message: "Error al editar la publicación" });
  }
};

// Eliminar una publicación
// const deletePost = async (req, res) => {
//   const postId = req.params.id;

//   try {
//     const user = await userModel.findUserByEmail(req.email);
//     const userId = user.id;

//     // Verificar si el usuario es el creador de la publicación
//     const post = await postModel.getPostById(postId);
//     if (!post || post.user_id !== userId) {
//       return res.status(403).json({ message: "No tienes permiso para eliminar esta publicación." });
//     }

//     // Eliminar la publicación de la base de datos
//     await postModel.deletePost(postId);
//     res.status(200).json({ message: "Publicación eliminada correctamente" });
//   } catch (error) {
//     console.error("Error al eliminar la publicación:", error);
//     res.status(500).json({ message: "Error al eliminar la publicación" });
//   }
// };

// Obtener todas las publicaciones
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Obtener una publicación por ID
const getPostsByUser = async (req, res) => {
  try {
    // const user = await userModel.findUserByEmail(req.email);
    const userId = req.params.userId;
    const post = await postModel.getPostsByUser(userId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Obtener una publicación por ID
const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postModel.getPostById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Dar "me gusta" a una publicación
const likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.body.userId; // ID del usuario que da el "me gusta"
    const updatedPost = await postModel.likePost(postId, userId);
    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Comentar una publicación
const commentOnPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId, comment } = req.body;
    const newComment = await postModel.commentOnPost(postId, userId, comment);
    return res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getPostCountByUser = async (req, res) => {
  try {
    const userId = req.params.userId; // Obtenemos el userId de los parámetros de la solicitud
    const postCount = await postModel.countPostsByUser(userId); // Llamamos a la función del modelo
    
    res.status(200).json({ post_count: postCount }); // Enviamos el conteo de publicaciones como JSON
  } catch (error) {
    console.error('Error al contar las publicaciones:', error);
    res.status(500).json({ error: 'Error al obtener el conteo de publicaciones' });
  }
};

const deletePostById = async (req, res) => {
  const postId = req.params.id;
  try {
    await postModel.deletePostById(postId);
    res.status(200).json({ message: "Publicación eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la publicaciones:", error);
    res.status(500).json({ message: "Error al eliminar la publicación" });
  }
};

const deletePostsByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    // Eliminar la publicación de la base de datos
    await postModel.deletePostsByUserId(userId);
    res.status(200).json({ message: "Publicaciónes eliminadas correctamente" });
  } catch (error) {
    console.error("Error al eliminar las publicaciones:", error);
    res.status(500).json({ message: "Error al eliminar las publicaciones" });
  }
};


// admin 
const createPost = async (req, res) => {
  const { title, description,category_id, userId } = req.body;

  const imagePost = req.files?.images || [];
  const pdf = req.files?.pdf || [];

  try {
    if (imagePost.length === 0 && pdf.length === 0) {
      return res.status(400).json({ message: "Se requieren una imagen y un archivo PDF." });
    }

    const imageUrl = await uploadBookToFirebase(imagePost[0]); 
    const pdfUrl = await uploadBookToFirebase(pdf[0]);

    const newPost = await postModel.addPost(userId, title, description, imageUrl, pdfUrl, category_id);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al crear la publicación:", error);
    res.status(500).json({ message: "Error al crear la publicación" });
  }
};

const incrementPostViews = async (req, res) => {
  const postId = req.params.id;
  if (isNaN(postId)) {
  return res.status(400).json({ error: "postId inválido" });
  }
  try {
    const updatedPost = await postModel.incrementPostViews(postId);
    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// backnode/controllers/post_controller.js

const getPostsPaginated = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = (page - 1) * limit;
  const categoryId = req.query.category_id || null;

  try {
    const posts = await postModel.getPostsPaginated(limit, offset, categoryId);

    // Cambia aquí: cuenta solo los posts de la categoría si hay filtro
    let totalPosts;
    if (categoryId) {
      totalPosts = await postModel.countPostsByCategory(categoryId);
    } else {
      totalPosts = await postModel.countTotalPosts();
    }
    const totalPages = Math.ceil(totalPosts / limit) - 1;
    return res.status(200).json({
      page,
      totalPages,
      totalPosts,
      posts
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getTop5PostsOfWeek = async (req, res) => {
  try {
    const posts = await postModel.getTop5PostsOfWeek();
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
}
};

const getNextPost = async (req, res) => {
  const postId = req.params.id;
  try {
    const nextPost = await postModel.getNextPost(postId);
    if (!nextPost) {
      return res.status(404).json({ message: "No hay siguiente publicación" });
    }
    return res.status(200).json(nextPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getPrevPost = async (req, res) => {

  const postId = req.params.id;
  try {
    const prevPost = await postModel.getPrevPost(postId);
    if (!prevPost) {
      return res.status(404).json({ message: "No hay publicación anterior" });
    }
    return res.status(200).json(prevPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}


export const postController = {
  createMyPost,
  editPost,
  getAllPosts,
  getPostById,
  getPostsByUser,
  likePost,
  commentOnPost,
  getPostCountByUser,
  deletePostById,
  deletePostsByUserId,
  createPost,
  incrementPostViews,
  getPostsPaginated,
  getTop5PostsOfWeek,
  getNextPost,
  getPrevPost
};
