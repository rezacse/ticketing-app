import buildClient from "../api/build-client";

const Index = ({ currentUser }) => {
  return <h1>{currentUser ? "sigIn" : "signout"}</h1>;
};

Index.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get("/api/users/current-user");
  return data;
};

export default Index;
