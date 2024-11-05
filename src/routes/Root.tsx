import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

function Root() {
	return (
		<RootContainer>
			<StyledRoot>
				<NavBar />
				<Outlet />
			</StyledRoot>
		</RootContainer>
	);
}
const StyledRoot = styled.div`
	background: linear-gradient(#ffffff, #f1e4e4);
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
`;

const RootContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

export default Root;
