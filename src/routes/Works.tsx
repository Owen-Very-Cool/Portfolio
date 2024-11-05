import styled from "styled-components";
import WorkItem from "../components/WorkItem";
import axcelerate from "../assets/works/axcelerate.png";
import odyssey from "../assets/works/odyssey.png";
import crimey from "../assets/works/crimey.png";
import rss from "../assets/works/rss.png";
import slime from "../assets/works/slime.png";
import portfolio from "../assets/works/portfolio.png";

function Works() {
	return (
		<WorksContainer>
			<WorksFlex>
				<WorkItem work="aXcelerate" route="axcelerate" image={axcelerate} />
				<WorkItem work="Odyssey Gaming" route="odyssey" image={odyssey} />
				<WorkItem work="Crimey Boyz" route="crimeyboyz" image={crimey} />
				<WorkItem work="Rickety Ship" route="ricketyship" image={rss} />
				<WorkItem work="Slime Cat" route="slimecat" image={slime} />
				<WorkItem work="This Portfolio" route="portfolio" image={portfolio} />
			</WorksFlex>
		</WorksContainer>
	);
}

const WorksContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const WorksFlex = styled.div`
	width: 70vw;
	height: 70vh;
	display: flex;
	flex-direction: row;
	margin-top: 10vh;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export default Works;
