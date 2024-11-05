import styled from "styled-components";

type ButtonProps = {
	text: string;
	onClick: React.MouseEventHandler;
};

function Button({ text, onClick }: ButtonProps) {
	return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.div`
	font-family: "Roboto";
	background-color: #e9e9e9;
	line-height: 49px;
	padding: 0 22px 0px 22px;
	border-radius: 10px;
	color: #363636;
	font-weight: 500;
	letter-spacing: 0.1em;
	margin-left: 13px;
	transition-duration: 0.2s;
	min-width: 90px;
	text-align: center;
	cursor: pointer;
	user-select: none;
	&:hover {
		background-color: #e15454;
		color: white;
	}
`;

export default Button;
