import { Link } from "react-router-dom";
import styled from "styled-components";

type ButtonProps = {
	text: string;
	route?: string;
	onClick?: React.MouseEventHandler;
	href?: string;
	size?: "large" | "small";
};

function Button({ text, route, onClick, href, size }: ButtonProps) {
	if (route) {
		return (
			<StyledLinkButton to={route} onClick={onClick}>
				{text}
			</StyledLinkButton>
		);
	} else {
		if (size != "small") {
			return (
				<a href={href} style={{ textDecoration: "none" }}>
					<StyledButton onClick={onClick}>{text}</StyledButton>
				</a>
			);
		} else {
			return (
				<a href={href} style={{ textDecoration: "none" }}>
					<StyledButton
						style={{ lineHeight: "30px", boxShadow: "1px 1px 1px grey" }}
						onClick={onClick}
					>
						{text}
					</StyledButton>
				</a>
			);
		}
	}
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

const StyledLinkButton = styled(Link)`
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
	text-decoration: none;
`;

export default Button;
