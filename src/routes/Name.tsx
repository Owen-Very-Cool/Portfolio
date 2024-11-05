import styled from "styled-components";

function Name() {
	return (
		<NameContainer>
			<StyledName>OWEN</StyledName>
		</NameContainer>
	);
}

const NameContainer = styled.div`
	left: 0;
	top: 0;
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
`;

const StyledName = styled.div`
	font-family: "Rubik Mono One";
	color: #e15454;
	font-size: 170px;
	letter-spacing: 0.1em;
	text-shadow: rgba(215, 72, 72, 45%) 0px 10px 40px;
	cursor: default;
	user-select: none;
	transition-duration: 0.2s;
	&:hover {
		scale: 1.1;
	}
`;

export default Name;
