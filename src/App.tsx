import styled, { ThemeProvider } from "styled-components";
import ContentView from "./components/ContentView";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<StyledRoot>
				<ContentView />
			</StyledRoot>
		</ThemeProvider>
	);
}

const defaultTheme = {
	skillTextColor: "#D16014",
	skillBubbleColor: "#E3CEC6",
	backgroundColor: "#2e1f27",
	textColor: "#ffffff",
};

const StyledRoot = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.textColor};
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	font-family: "Roboto";
	overflow: hidden;
	::-webkit-scrollbar {
		background-color: transparent;
		width: 5px;
		opacity: 0.1;
	}
	::-webkit-scrollbar-thumb {
		background-color: #3b2631;
		border-radius: 10px;
	}
	@media only screen and (max-width: 1120px) {
		overflow-y: scroll;
	}
`;

export default App;
