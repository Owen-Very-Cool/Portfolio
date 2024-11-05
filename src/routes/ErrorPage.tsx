import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styled from "styled-components";

function ErrorPage() {
	const error = useRouteError();
	console.log(error);

	let errorMessage: string;
	if (isRouteErrorResponse(error)) {
		errorMessage = error.statusText;
	} else {
		errorMessage = "Unknown Error";
	}

	return (
		<ErrorContainer>
			<ErrorTitle>{errorMessage}</ErrorTitle>
			<StyledErrorDescription>
				Uh oh, we cant seem to find the page you're looking for. Try using the
				navbar to find what you're looking for.
			</StyledErrorDescription>
		</ErrorContainer>
	);
}

const ErrorTitle = styled.h1`
	font-family: Roboto;
`;
const StyledErrorDescription = styled.div`
	font-family: Roboto;
`;

const ErrorContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow: hidden;
`;

export default ErrorPage;
