import { Link } from "react-router-dom";
import styled from "styled-components";
import { MouseEvent, useState } from "react";

type WorkItemProps = {
	work: string;
	route: string;
	image: string;
};

function WorkItem({ work, route, image }: WorkItemProps) {
	const [x, setX] = useState(0.5);
	const [y, setY] = useState(0.5);

	function rotateImage(event: MouseEvent<HTMLDivElement>) {
		let rect = (event.target as HTMLElement).getBoundingClientRect();
		setX((event.pageX - rect.left) / rect.width);
		setY((event.pageY - rect.top) / rect.width);
	}
	function resetImage() {
		setX(0.5);
		setY(0.5);
	}

	return (
		<Link to={route} style={{ textDecoration: "none" }}>
			<StyledWorkItem onMouseLeave={resetImage}>
				<WorkImg
					src={image}
					onMouseMove={rotateImage}
					style={{
						transform:
							"perspective(5000px) rotateY(" +
							(x - 0.5) * 50 +
							"deg) rotateX(" +
							(y - 0.5) * -50 +
							"deg)",
						color: "red",
					}}
				/>
				<WorkName>{work}</WorkName>
			</StyledWorkItem>
		</Link>
	);
}

const StyledWorkItem = styled.div`
	width: 350px;
	height: 280px;
	margin: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition-duration: 0.2s;
	&:hover {
		cursor: pointer;
		scale: 1.2;
		//transform: perspective(5000px) rotateY(20deg) rotateX(20deg);
	}
`;
const WorkImg = styled.img`
	width: 350px;
	border-radius: 5px;
`;
const WorkName = styled.div`
	color: black;
	font-family: "Roboto";
	font-size: 26px;
	margin-top: 10px;
	letter-spacing: 0.1vw;
	font-weight: 300;
`;

export default WorkItem;
