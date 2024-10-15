import styled from "styled-components";
import JobContainer from "./JobContainer";

function ContentView() {
	return (
		<WindowContainer>
			<LeftContainer>
				<StyledName>Owen Peries</StyledName>
				<StyledSubtitle>Software Developer</StyledSubtitle>
				<StyledSubliminalMessage>
					pleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehiremepleasehireme
				</StyledSubliminalMessage>
			</LeftContainer>
			<RightContainer>
				<SectionTitle>About Me</SectionTitle>
				<p
					style={{
						paddingLeft: 40,
						fontFamily: "Roboto",
						fontWeight: 400,
						fontSize: 18,
						marginRight: 15,
					}}
				>
					Hi there, my name's Owen! <br />
					I'm a brisbane-based software developer, with a passion for computers.{" "}
					<br />
					I'm looking for new opportunities to learn and grow! If you think you
					have a role that fits, I'd love to have a chat with you.
				</p>
				<p
					style={{
						marginLeft: 40,
						fontSize: 30,
						fontFamily: "Roboto",
						fontWeight: 600,
						marginBottom: 10,
					}}
				>
					Recent Work
				</p>
				<JobContainer
					year="2022-2024"
					title="Full Stack Development • Odyssey Gaming"
					url="https://www.odysseygaming.com/"
					description="Built and maintained software for internal and external use.
								Created APIs for use by third-party applications. Worked closely
								with product and QA to ensure code was viable and tested before
								going out. Assisted in training other developers."
					skills={["C# .Net", "SQL", "Angular", "Azure Devops", "Octopus"]}
					skillsGeneral={["UI", "API", "Database"]}
				/>
				<JobContainer
					year="2020-2022"
					title="Full Stack Development • aXcelerate"
					url="https://www.axcelerate.com.au/"
					description="Developed UI in accordance to designer’s Figma spec. Added
								features to application that required new/updated APIs. Assisted
								in training new developers."
					skills={["React", "SQL", "Coldfusion"]}
					skillsGeneral={["UI", "API", "Database"]}
				/>
				<StyledContactContainer></StyledContactContainer>
			</RightContainer>
		</WindowContainer>
	);
}

const WindowContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 15px;
	padding: 0;
	justify-content: center;
	gap: 60px;
	@media only screen and (max-width: 1120px) {
		flex-direction: column;
		gap: 0px;
	}
`;

const ColumnContainer = styled.ul`
	display: flex;
	flex-direction: column;
	width: 45vw;
	padding: 0;
`;

const LeftContainer = styled(ColumnContainer)`
	@media only screen and (max-width: 1120px) {
		width: auto;
		text-align: center;
	}
`;

const RightContainer = styled(ColumnContainer)`
	overflow-y: scroll;
	height: 98vh;
	@media only screen and (max-width: 1120px) {
		overflow-y: display;
		height: auto;
		width: auto;
	}
`;

const SectionTitle = styled.p`
	margin-left: 40px;
	font-size: 30px;
	font-family: "Roboto";
	font-weight: 600;
	margin-bottom: 10;
	margin-top: 95px;
`;

const StyledName = styled.h1`
	font-size: 96px;
	font-weight: 500;
	margin-bottom: 0px;
`;
const StyledSubtitle = styled.h2`
	font-size: 40px;
	font-weight: 500;
	margin-top: 0px;
	margin-bottom: 12px;
`;

const StyledSubliminalMessage = styled.h2`
	font-size: 40px;
	font-weight: 500;
	margin-top: 0px;
	opacity: 0.04;
	max-width: 600px;
	height: 530px;
	overflow-wrap: anywhere;
	overflow: hidden;
	@media only screen and (max-width: 1120px) {
		display: none;
	}
`;

const StyledContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	transition-duration: 0.2s;
	padding: 0px 40px 0px 40px;
`;

export default ContentView;
