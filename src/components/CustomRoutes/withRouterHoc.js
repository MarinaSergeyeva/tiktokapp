import React from 'react';
import { useNavigate } from 'react-router-dom';

const withRouter = Component => {
  const Wrapper = props => {
    const history = useNavigate();
    console.log(`history`, history);

    return <Component history={history} {...props} />;
  };

  return Wrapper;
};

const withAuth = WrappedComponent => {
  function WithAuth(props) {
    return <WrappedComponent {...props} />;
  }
  return withRouter(WithAuth);
};

export default withAuth;
