import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function Products() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Products</h1>
      <p>This is the products page</p>
      <p>Logged in user:</p>
      {user ? <p>{user.userName}</p> : <p>Not logged in</p>}
    </>
  );
}
