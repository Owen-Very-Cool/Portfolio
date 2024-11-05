import styled from "styled-components";
import profile from "../assets/profile.png";

function Root() {
	return (
		<AboutContainer>
			<AboutLeft>
				<AboutTitle>Hi, Im Owen 👋</AboutTitle>
				<AboutText>
					I’m a passionate full-stack developer from Brisbane, Australia.{" "}
					<br></br> <br></br>Lately I’ve been looking for new opportunities to
					develop my skills. If you’re looking for someone to help with some
					cutting-edge tech, lets get in touch!
				</AboutText>
			</AboutLeft>
			<AboutRight>
				<img style={{ width: "250px" }} src={profile}></img>
			</AboutRight>
		</AboutContainer>
	);
}

const AboutTitle = styled.div`
	font-weight: 600;
	font-size: 48px;
	margin-bottom: 22px;
	letter-spacing: 0.1vw;
`;

const AboutContainer = styled.div`
	font-family: "Roboto";
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	flex-direction: row;
`;

const AboutLeft = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 400;
	font-size: 38px;
	width: 42vw;
	letter-spacing: 0.02vw;
`;

const AboutRight = styled.div`
	width: 40vw;
	display: flex;
	flex-direction: row-reverse;
`;

const AboutText = styled.div``;

export default Root;
