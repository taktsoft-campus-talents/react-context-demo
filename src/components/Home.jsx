import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export function Home() {
  const { user, login } = useContext(UserContext);
  const [localUserName, setLocalUserName] = useState("");

  return (
    <>
      <h1>Home</h1>
      <p>This is the home page</p>
      <h2>Context Value</h2>
      {user ? <p>{user.userName}</p> : <p>Not logged in</p>}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          login(localUserName);
        }}
      >
        <input
          type="text"
          value={localUserName}
          onChange={(event) => setLocalUserName(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
