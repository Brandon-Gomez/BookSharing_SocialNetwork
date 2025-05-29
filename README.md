Este repositorio es una descripción general sobre una aplicación web completa que permite a los usuarios compartir, descubrir e interactuar con libros a través de funciones de red social. La aplicación implementa funciones de autenticación de usuarios, gestión de contenidos, interacciones sociales y almacenamiento de archivos.
La red social Read Mate sigue un patrón de arquitectura de tres niveles con una clara separación entre las capas de presentación, lógica empresarial y datos.

Componente	Tecnología	Configuración
Tiempo de ejecución	Node.js	Marco de trabajo Express.js
Base de datos	PostgreSQL	booksharing_dben localhost:5432
Autenticación	JWT	Caducidad de 5 horas, basada en secreto
Almacenamiento de archivos	Firebase	booksharing-socialnetwork.appspot.com
Proveedor de OAuth	Google	ID de cliente configurado

Componentes clave

Sistema de autenticación

La aplicación admite mecanismos de autenticación dual:

Autenticación JWT : correo electrónico/contraseña con hash bcrypt
Google OAuth 2.0 : Integración de inicio de sesión social
Las cuentas de usuario incluyen acceso basado en roles con is_adminbanderas e identificación de usuario de Google a través de is_google_userbanderas.

Gestión de contenidos

Los libros se gestionan a través de la poststabla con:

Metadatos: title, description,category_id
Archivos: image(portada), pdf_file(contenido)
Análisis: viewscontador, marcas de tiempo de creación/actualización
Propiedad: user_idrelación de clave externa

Características sociales

La plataforma implementa redes sociales a través de:

Sistema siguiente : Relaciones de muchos a muchos a través de followsla tabla
Sistema de interacción : los "Me gusta" de las publicaciones se rastrean en likesuna tabla con restricciones únicas
Descubrimiento de contenido : organización basada en categorías y búsqueda de usuarios

Gestión de archivos

Las cargas de archivos se gestionan a través de la integración de Firebase Storage:

Archivos PDF de libros almacenados en el depósito de Firebase
Fotos de perfil e imágenes de portada de libros
Middleware múltiple para procesamiento de carga
