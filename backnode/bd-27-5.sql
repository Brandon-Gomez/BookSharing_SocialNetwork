PGDMP  ,                    }            booksharing_db    17.4    17.4 /    _           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            `           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            a           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            b           1262    16387    booksharing_db    DATABASE     t   CREATE DATABASE booksharing_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-ES';
    DROP DATABASE booksharing_db;
                     postgres    false            �            1259    16464 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.categories;
       public         heap r       postgres    false            �            1259    16463    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public               postgres    false    225            c           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public               postgres    false    224            �            1259    16438    follows    TABLE     �   CREATE TABLE public.follows (
    follower_id integer NOT NULL,
    followed_id integer NOT NULL,
    follow_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.follows;
       public         heap r       postgres    false            �            1259    16419    likes    TABLE     �   CREATE TABLE public.likes (
    id integer NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.likes;
       public         heap r       postgres    false            �            1259    16418    likes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.likes_id_seq;
       public               postgres    false    222            d           0    0    likes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;
          public               postgres    false    221            �            1259    16403    posts    TABLE     �  CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    user_id integer NOT NULL,
    image character varying(255),
    pdf_file character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    views integer DEFAULT 0,
    category_id integer
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    16402    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public               postgres    false    220            e           0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public               postgres    false    219            �            1259    16389    users    TABLE     _  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(60),
    username character varying(50) NOT NULL,
    name character varying(100),
    birthdate date,
    gender character varying(10),
    description text,
    reset_token character varying(255),
    reset_token_expiry timestamp without time zone,
    profile_picture character varying(255),
    terms_accepted boolean DEFAULT false NOT NULL,
    is_admin boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    is_google_user boolean DEFAULT false
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16388    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    218            f           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    217            �           2604    16467    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    225    224    225            �           2604    16422    likes id    DEFAULT     d   ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);
 7   ALTER TABLE public.likes ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            �           2604    16406    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            �           2604    16392    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            \          0    16464 
   categories 
   TABLE DATA           G   COPY public.categories (id, name, description, created_at) FROM stdin;
    public               postgres    false    225   �8       Z          0    16438    follows 
   TABLE DATA           H   COPY public.follows (follower_id, followed_id, follow_date) FROM stdin;
    public               postgres    false    223    ;       Y          0    16419    likes 
   TABLE DATA           A   COPY public.likes (id, post_id, user_id, created_at) FROM stdin;
    public               postgres    false    222   i;       W          0    16403    posts 
   TABLE DATA           }   COPY public.posts (id, title, description, user_id, image, pdf_file, created_at, updated_at, views, category_id) FROM stdin;
    public               postgres    false    220   <       U          0    16389    users 
   TABLE DATA           �   COPY public.users (id, email, password, username, name, birthdate, gender, description, reset_token, reset_token_expiry, profile_picture, terms_accepted, is_admin, created_at, is_google_user) FROM stdin;
    public               postgres    false    218   tE       g           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 25, true);
          public               postgres    false    224            h           0    0    likes_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.likes_id_seq', 117, true);
          public               postgres    false    221            i           0    0    posts_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.posts_id_seq', 522, true);
          public               postgres    false    219            j           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 43, true);
          public               postgres    false    217            �           2606    16474    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public                 postgres    false    225            �           2606    16472    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public                 postgres    false    225            �           2606    16443    follows follows_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_pkey PRIMARY KEY (follower_id, followed_id);
 >   ALTER TABLE ONLY public.follows DROP CONSTRAINT follows_pkey;
       public                 postgres    false    223    223            �           2606    16425    likes likes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_pkey;
       public                 postgres    false    222            �           2606    16427    likes likes_post_id_user_id_key 
   CONSTRAINT     f   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_post_id_user_id_key UNIQUE (post_id, user_id);
 I   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_post_id_user_id_key;
       public                 postgres    false    222    222            �           2606    16412    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    220            �           2606    16458    users unique_email 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_email UNIQUE (email);
 <   ALTER TABLE ONLY public.users DROP CONSTRAINT unique_email;
       public                 postgres    false    218            �           2606    16460    users unique_username 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_username UNIQUE (username);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT unique_username;
       public                 postgres    false    218            �           2606    16399    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public                 postgres    false    218            �           2606    16397    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218            �           2606    16401    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public                 postgres    false    218            �           2606    16449     follows follows_followed_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_followed_id_fkey FOREIGN KEY (followed_id) REFERENCES public.users(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.follows DROP CONSTRAINT follows_followed_id_fkey;
       public               postgres    false    218    223    4782            �           2606    16444     follows follows_follower_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_follower_id_fkey FOREIGN KEY (follower_id) REFERENCES public.users(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.follows DROP CONSTRAINT follows_follower_id_fkey;
       public               postgres    false    218    223    4782            �           2606    24649    likes likes_post_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_post_id_fkey;
       public               postgres    false    222    4786    220            �           2606    24654    likes likes_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_user_id_fkey;
       public               postgres    false    4782    222    218            �           2606    16475    posts posts_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);
 F   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_category_id_fkey;
       public               postgres    false    220    4796    225            �           2606    16413    posts posts_user_id_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 B   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_user_id_fkey;
       public               postgres    false    4782    218    220            \   �  x��S�n�@>/O1��@���HQ[��q�eXi��fmT�C�G��u֐�	.���|�m1r��=�ѽ�*ּ��k\`�/�@�-;���H�rP�n��b��c��8�ǓiY����,?��c$�k�k{S�@��s����w����S�'��jQ6�eS7j_��!߄�//(P�Y��|��~����_4LSv�}���I�ؽZ,+#W�b�����-�ψ��7i&�4T��f�W8��Y �����C u3�*�0��w�UJ��F���e���٫Bj�~Lr���W�Og!R\�?�F28V����/7#UQ�th,8Q�޵`���Q��BŴ�lzS��eܲS�~�x�W��|,l��Dؐ�!��8v��[e�r���ۺ��k��
;�� ������"���qi���~�\�`�W�sA�ܾwe����y�_��x��tw�ĕ�ڄ�2����U��cM+�h�g�a�)����������^�?�1R�      Z   Y   x�U���@��K6 ��B-�_���s���2_�)q"����t���_Ak ����,^��X��]������F�s�V�������      Y   �   x�m��C1Dѵ�"<�o0���_G�*R��ѝQ���L��x��#���,H%4��O�8�O4+�7��������hT1H��=��H9�,gn�wd��NU�򎜽J��z�(Xz�8��;J΀Kқ���O=       W   `	  x��Yˎ��]�_�e��z?����$�'����LE*���S���x�.���r���w��D���*�Xu��[���<��7~?Nͫ&M��)O�o~��7�s�|�$ܴ�S#~�<!����x�����q����q�g��6��Ga��_��vdc��!�6N߷�p����Q--�ԓ`�$�YA|�D�$�*G��sg��\	�iw]Y��<F�"�$���N���&%1�"��q�<���W�!��\���[I���V(���!�0�U|Ky+��n�������������媀2j��i96S"�jA5�S����;m�T8�SB@yTDꢈST|`\�R<�4�|+tK��N}(۲�5�LP� (�<�C�P3��i�����fg��҃�L�2'��@BU�Zʳ�@K-�uzeh�b�[�=�D�B��^&�J�XcJ�Z�0�-�-W-WZH�a���ʗ~Jݐ�� ]�C�y���7/����7����;����O���)χ�'|5��ܜ<�r|X/>�W�������GH�r�S�<9�qڝ��� ���0�<lv~�	*U��0�}76_�<5��y|�����a���L��N?����,oYֵ�з:�ea���t=��۾�>�#l��m���g�uB�3L��|�Qř"�hJ��FfG/bV���4�2Z�%�b�T., ݈���b��g�/ʺ��~�o��jg�����,7ΙK*[��n��L	�<��.O�n��݄l�7y8��4�C�f��e��n��˵J͹�8�Cʕ.���TG��0n�/�˱9vK��s��p��W�73jݷ�7��$�����ǹ.AQ�RJ�>G`�g��o���'^}s��q�r��|����@�ݡ[��f�v����&��u��팕���o��B�~�>\2�������~�ݾ�+˝��SI	eJn}"�KEJaYhj�4��^�4�%�O��PF\	�X�h2����}�c�U�qG%��e��+�4�Ǘʑ�r��/��g
k�L!�;�g)��$���g����{r}9�����V���a�&��3�9L��@6�D�(�X�D�"$%�B�����YNP}��p�J*�ݨ�D㖧���Oywe�o7�!�Wſ��8"_����U����A��`H�u$�"I.0���H��^Xo��ϕY/�(�W��� �A2⥑]Q2�F�r���-� 5�w�FR#���'�Z���*�.�X��3	zь-x�`�� ���>��x�b�5�<��D��	�E�_�c�Áz����ٶB�Pj�Z���8�2ݢSAЁ�w� =Y�S]O�8��� ͆�gdU��):��#ҹ�V�8��Ƌ��]�$�re���y0�Ur��YI�@��̅i��d�� tH�C�p{�S%����b\� �Ns\����_F�r
�`4��6��3'I(�J�@�=�[[v�������FI�_#�#����],�b���Z	u�����
��m���T�3t=~ׁ?�b���@ᦎKg��7���m�z��y�rO�C�M�o�1U�6�0����o;t��	�$���g9upa���O��gh8���j�S����:���4$������F|�T��y2u��/��5��jM漫��%ޜr�l��_7��'L�n���+�~�yц�l���9�ꔉfE�"�7��'�2�:�5kk�H���1�W���?(L�dT�JnF���Bֳ���إ�7�L�l��9/�R�.GO�Ϻg���E� J���(`Fg�䌱�s=�������;~\H(�4��i�K!�E�Qy��̀��FE8��C�afKU�p�K�ص��%�5sk���	�F@|I�=�{@c?�]�����
EqI�V�Pa��/hD�%�|	����)Sv:BuF#L\�������$?]椨t������0jj&�%�3^�����X%�����4ٳ�1;��bO��ѧ8��������k�ZU�ϚD�mi���-bPf�0��,� (TT1&nc�d��VU�� ��<F�����&v}sS����.@�Oh���&��3�Z5"�}����W�V��H
QKe�v�=���k7ٔQ$�4c�0W��M<)�ܝ�����SH�ޏ���-���thD�E`Te�����S��X�*]�G3������9����Ŕ+��g\��U���KT*��� ��V�&�-�D]7՞9Nl) �d��>��h)�����w�e�p�����a9���v�O��P��y6��o!ܟq˺v�q.|Ba�:s�*^P��l(�λp�!�V��A(��C ��=�>� ��9{�.��S�m����S?U�������a��v/�ܡN\��2�2��|�>x��?l-�I      U   �  x����n�:���S���1s�������Ҥm�j�ʀ!$�	6$����¾�m�M2���R"��Y����n)Is�g��8Q}�*爜C�<k�f��*��j��<�;�Q*¶�v;��Rm3p�l%�zJ��v��&�P�v��O(�� �5�kH6��;�����T	�t�h�験�]3�[M3Ӧn��������\\/�t������=?oo�HєVA��e��$qF����W����i���W��	H��a@A�8Hb�`\��2�1 h1Pf z��т��T��� ���'���H�R&����H�/H���t���/�1�{�_.ˋD$��R�=��qA3��S�oyB���*�04�OCAy��te�i�i2X'��kw�̛�E�R�ze��[����UӮ�<t��F���H�͔d���'�I�Dዲ ��4͋=��A�/g%�$��<v�g��4���KЉyXH&�<�I!�ZȉY�Q	�/��y�x��"�z}_�DT��J����=�V|A�8�j\�&IFņ+��9ϙx��,�ZǶ�S��m��fh!��!5��^��T���p6>n�_]��t���[l�tlG;Hg+�G�z��7�+4��iN��m�V���_'�vܹ/���m4���떦Ǌ�6(7Rk@���O�(�U戥�IC�4E��:��v����H4�mF�,L��u�c{�¬��m�wE�2�T�^]�(S��K��T��l@S�-;5����o�)��N�}V�h�d�,RrZH?��� �7ۑ����=��``�5���YFH���rP=�q���e��f��ĥ�?�c����X "9L�0U�[��?Uę�~%��a"=��E\��:�?��?FtS�5?�'VҎ��Ŏ��� ~MD�~��N���xd�A����D�R����ldb�0�I{A��h��/kcؽ����{�l�ݫr���w�����l������}�dO��|U�M����t�pi*���������.Q6,     