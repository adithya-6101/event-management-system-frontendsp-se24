import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from "./Login.js";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(window.localStorage.getItem('user_ID'));

    React.useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
       return <Login />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;


// import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// const withAuth = (WrappedComponent) => {
//   const WithAuth = (props) => {
//     // const navigate = useNavigate();

//     // Since we assume the user is always authenticated, no need to check
//     // If not authenticated, it won't redirect to the login page

//     // Render the wrapped component with the provided props
//     return <WrappedComponent {...props} />;
//   };

//   return WithAuth;
// };

// export default withAuth;
