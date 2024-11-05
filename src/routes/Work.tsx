import styled from "styled-components";
import Button from "../components/Button";

type WorkProps = {
	name: string;
	desc: string[];
	img: string;
	url?: string;
};

function Work({ name, desc, img, url }: WorkProps) {
	return (
		<WorkContianer>
			<WorkLeft>
				<WorkTitle>{name}</WorkTitle>
				<WorkText>
					{desc.map((section, index) => {
						return (
							<div key={index}>
								{section}
								<br></br>
								<br></br>
							</div>
						);
					})}
				</WorkText>
			</WorkLeft>
			<WorkRight>
				<img style={{ width: "650px" }} src={img}></img>
				<ButtonFlexContainer>
					<Button text="Visit Site" href={url} size="small" />
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

export default Work;
