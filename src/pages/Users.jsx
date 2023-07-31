import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function NewUsers() {
  return (
    <>
      <Heading as="h3">Update Account</Heading>
      <Link to="/account">
        <Button>Go to Update Account Page</Button>
      </Link>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
