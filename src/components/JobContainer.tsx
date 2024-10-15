import styled from "styled-components";
import RowContainer from "./RowContainer";
import TextBubble from "./TextBubble";

type JobContainerProps = {
	year: string;
	title: string;
	url: string;
	description: string;
	skills: string[];
	skillsGeneral: string[];
};

function JobContainer({
	year,
	title,
	url,
	description,
	skills,
	skillsGeneral,
}: JobContainerProps) {
	return (
		<StyledJobContainer onClick={() => (window.location.href = url)}>
			<RowContainer>
				<StyledYear>{year}</StyledYear>
				<StyledJobTitle>{title}</StyledJobTitle>
			</RowContainer>
			<p>{description}</p>
			<RowContainer>
				{skills.map((skill, index) => (
					<TextBubble key={index} text={skill} />
				))}
			</RowContainer>
			<RowContainer>
				{skillsGeneral.map((skill, index) => (
					<TextBubble key={index} text={skill} />
				))}
			</RowContainer>
		</StyledJobContainer>
	);
}

const StyledJobContainer = styled.ul`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	transition-duration: 0.2s;
	padding: 0px 40px 0px 40px;
	&:hover {
		background-color: #3b2631;
		cursor: pointer;
	}
`;

const StyledYear = styled.h5`
	font-family: "Roboto";
	font-size: 16px;
	font-weight: 100;
	margin-right: 50px;
	white-space: nowrap;
`;

const StyledJobTitle = styled.h3`
	font-family: "Roboto";
	font-size: 20px;
	font-weight: 500;
`;

export default JobContainer;
