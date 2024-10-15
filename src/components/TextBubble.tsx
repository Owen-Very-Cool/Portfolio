import styled from "styled-components";

type TextBubbleProps = {
	text: string;
};

function TextBubble({ text }: TextBubbleProps) {
	return <StyledTextBubble>{text}</StyledTextBubble>;
}

const StyledTextBubble = styled.div`
	color: ${(props) => props.theme.skillTextColor};
	background-color: ${(props) => props.theme.skillBubbleColor};
	border-radius: 10px;
	padding: 5px 13px 5px 13px;
	font-family: "Roboto";
	font-weight: 500;
	font-size: 16px;
	margin-right: 5px;
	white-space: nowrap;
`;

export default TextBubble;
