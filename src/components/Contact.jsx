import { useOutletContext } from "react-router-dom";
export function Contact() {
  const { tofu } = useOutletContext();
  return (
    <>
      <h1>Contact</h1>
      <p>This is the contact page</p>
      <p>{tofu}</p>
    </>
  );
}
