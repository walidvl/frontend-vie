// import axios from 'axios';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import cookies from 'js-cookie';

// const AuthUser = () => {
//   const router = useRouter();

//   const getToken = () => {
//     return cookies.get('token') || null;
//   };

//   const getUser = () => {
//     const userString = cookies.get('user');
//     return userString ? JSON.parse(userString) : null;
//   };

//   const [token, setToken] = useState(getToken());
//   const [user, setUser] = useState(getUser());

//   const saveToken = (user, token) => {
//     cookies.set('token', token, { expires: 7 }); // Set the token as a cookie with an expiration time of 7 days
//     cookies.set('user', JSON.stringify(user), { expires: 7 }); // Set the user data as a cookie with an expiration time of 7 days
//     setToken(token);
//     setUser(user);
//     router.push('/dashboard');
//   };

//   const logout = () => {
//     cookies.remove('token'); // Remove the token cookie on logout
//     cookies.remove('user'); // Remove the user data cookie on logout
//     setToken(null);
//     setUser(null);
//     router.push('/login');
//   };

//   const http = axios.create({
//     baseURL: "http://localhost:8000/api",
//     headers: {
//       "Content-type": "application/json",
//       "Authorization": token ? `Bearer ${token}` : ''
//     }
//   });

//   // Example of login function that saves the token after successful authentication
//   const handleLogin = async (credentials) => {
//     try {
//       const response = await http.post('/login', credentials);
//       const { user, access_token: token } = response.data;
//       saveToken(user, token);
//     } catch (error) {
//       // Handle login error here
//     }
//   };

//   return {
//     setToken: saveToken,
//     token,
//     user,
//     http,
//     logout,
//     handleLogin
//   };
// };

// export default AuthUser;
