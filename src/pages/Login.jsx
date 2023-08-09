import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 48rem;
	align-content: center;
	justify-content: center;
	gap: 3.2rem;
	background-color: var(--color-grey-50);
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	height: 8rem;
	background-color: #bcedff;
	padding: 2rem;
	border-radius: 2rem;
	font-size: 10px;
	font-weight: bold;
	margin: 0 auto;
`;

function Login() {
	return (
		<>
			<LoginLayout>
				<Heading as="h4">Login To Your Acount</Heading>

				<LoginForm />
				<Box>
					<h3>Test email and pass:</h3>
					<p>Email: kiani@kia.com</p>
					<p>password : 22222222</p>
				</Box>
			</LoginLayout>
		</>
	);
}

export default Login;
