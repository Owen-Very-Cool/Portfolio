import styled from "styled-components";
import axcelerate from "../../assets/works/axcelerate.png";
import Button from "../../components/Button";

function Axcelerate() {
	return (
		<WorkContianer>
			<WorkLeft>
				<WorkTitle>aXcelerate</WorkTitle>
				<WorkText>
					A local company making best-in-class training management software for
					Australian Registered Training Orgs. <br />
					<br />
					Here I developed <strong>React UI components</strong> based on our
					design team’s figma documents, developed new features in the
					<strong> coldfusion</strong> site, and updated & maintained our{" "}
					<strong>SQL database</strong>.
				</WorkText>
			</WorkLeft>
			<WorkRight>
				<img style={{ width: "650px" }} src={axcelerate}></img>
				<ButtonFlexContainer>
					<Button
						text="Visit Site"
						href="https://www.axcelerate.com.au/"
						size="small"
					/>
				</ButtonFlexContainer>
			</WorkRight>
		</WorkContianer>
	);
}

const WorkTitle = styled.div`
	font-weight: 600;
	font-size: 48px;
	margin-bottom: 22px;
	letter-spacing: 0.1vw;
`;

const WorkContianer = styled.div`
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

const WorkLeft = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 400;
	font-size: 38px;
	width: 42vw;
	letter-spacing: 0.02vw;
`;

const WorkRight = styled.div`
	width: 40vw;
	display: flex;
	flex-direction: column;
	align-items: end;
`;

const ButtonFlexContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
	justify-content: end;
	margin-top: 10px;
`;

const WorkText = styled.div``;

export default Axcelerate;
