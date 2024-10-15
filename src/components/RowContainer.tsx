import styled from "styled-components";

type RowContainerProps = {
	children: React.ReactElement[];
};

function RowContainer({ children }: RowContainerProps) {
	return <StyledRowContainer>{children}</StyledRowContainer>;
}

const StyledRowContainer = styled.ul`
	display: flex;
	flex-direction: row;
	margin-bottom: 15px;
	padding: 0;
`;

export default RowContainer;
