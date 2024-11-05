import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import close from "../assets/close.png";

function NavBar() {
	const [showContact, setShowContact] = useState(false);

	return (
		<StyledNavBar>
			<Logo to={``}>Owen</Logo>
			<NavButtons>
				<Button text="ABOUT" route="about" />
				<Button text="WORKS" route="works" />
				<Button text="RESUME" href="../src/assets/OwenResume.pdf" />
				<Button
					text="CONTACT"
					route=""
					onClick={() => {
						setShowContact(!showContact);
					}}
				/>
			</NavButtons>
			<StyledContact style={{ top: showContact ? "80vh" : "100vh" }}>
				<ContactTop>
					<CloseButton src={close} onClick={() => setShowContact(false)} />
				</ContactTop>
				<ContactMain>
					<ContactItem>email: mail@owenperies.com</ContactItem>
					<ContactItem>phone: 0491155298</ContactItem>
				</ContactMain>
			</StyledContact>
		</StyledNavBar>
	);
}

const StyledNavBar = styled.div`
	position: fixed;
	height: 101px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	z-index: 10;
`;

const Logo = styled(Link)`
	margin: 17px 0px 0px 17px;
	width: 107px;
	height: 38px;
	background-color: #d07a7a;
	text-align: center;
	text-decoration: none;
	color: white;
	font-family: "Rubik Mono One";
	border-radius: 10px;
	font-size: 24px;
	line-height: 40px;
	letter-spacing: 0.1em;
	cursor: pointer;
	user-select: none;
`;

const NavButtons = styled.div`
	margin-right: 17px;
	margin-top: 32px;
	display: flex;
	flex-direction: row;
	margin-bottom: 17px;
`;

const StyledContact = styled.div`
	position: fixed;
	width: 100vw;
	height: 200px;
	top: 100vh;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	border-radius: 10px 10px;
	transition-duration: 0.2s;
`;

const ContactTop = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: row-reverse;
`;

const ContactMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ContactItem = styled.div`
	font-family: "Roboto";
	font-weight: 300;
	margin-left: 10px;
	margin-top: 5px;
`;

const CloseButton = styled.img`
	width: 50px;
	height: 50px;
	margin: 10px;
	transition-duration: 0.2s;
	&:hover {
		scale: 1.2;
		cursor: pointer;
	}
`;

export default NavBar;
