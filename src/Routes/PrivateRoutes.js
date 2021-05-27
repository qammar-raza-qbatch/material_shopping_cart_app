import React from "react";
import { Route } from "react-router-dom";

const privateRoute = ({
  component: Component,
  withLayout: Layout,
  ...rest
}) => {
  const renderRoute = () => (
    <Route {...rest} render={(props) => <Component {...props} />} />
  );
  return <Layout>{renderRoute()}</Layout>;
};

export default privateRoute;