import { ThemeProvider } from "styled-components";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import About from "./routes/About";
import Name from "./routes/Name";
import Works from "./routes/Works";
import Work from "./routes/Work";
import axcelerate from "../src/assets/works/axcelerate.png";
import odyssey from "../src/assets/works/odyssey.png";
import crimey from "../src/assets/works/crimey.png";
import rickety from "../src/assets/works/rssReal.jpg";
import slimecat from "../src/assets/works/slime.png";
import portfolio from "../src/assets/works/portfolio.png";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

const workPages = {
	aXcelerate: {
		name: "aXcelerate",
		desc: [
			"A local company making best-in-class training management software for Australian Registered Training Orgs.",
			"Here I developed React UI components based on our design team’s figma documents, developed new features in the coldfusion site, and updated & maintained our SQL database.",
		],
		url: "https://www.axcelerate.com.au/",
	},
	odyssey: {
		name: "Odyssey Gaming",
		desc: [
			"A well-respected Licensed Monitoring Operator (LMO) to the Queensland Club and Hotel Industry.",
			"Here I had the opportunity to create various .Net APIs, update and maintain our SQL database, and ",
		],
		url: "https://www.odysseygaming.com/",
	},
	crimey: {
		name: "Crimey Boyz",
		desc: [
			"Crimey Boyz was an asymmetric party game designed for a researcher at the University of Queensland. The purpose of the game was to create an environment where a player's actions could be used to determine if they were acting selfiish or altruistically.",
			"My role in the project was as the scrum master, where I maintained contact with our client, facilitated meetings, and managed team work distribution. While doing the project, I exclusively worked on game's design and implementation. This included conceptualisation/balancing, game art, and gameplay programming. The files for this project are now publicly available on github under the MIT license",
		],
		url: "https://github.com/Cameron-Weber/CRIMEY-BOYZ?fbclid=IwAR1NjLhpOa4pJa7Yyweb6t1leg8fkIwaPQidxlyQ1vMyaUpgt9xiKbsBaqI",
	},
	rickety: {
		name: "Rickety Ship",
		desc: [
			"Rickety Spaceship Simulator was a teambuilding asymmetric multiplayer game that makes use of physical interactions to help improve team communication.",
			"In this project I did the majority of player controls. This meant learning how to use a variety of tools, including making code for a balance-board, kinect, ",
		],
		url: "https://owenperies.com/rss/index.html",
	},
	slimecat: {
		name: "Slime Cat",
		desc: [
			"Slime Cat was a game I created with artist Iona Murray for the 'Quantum Games' competition, as part of Brisbane's international science festival.",
			"In this project, I designed and coded the game in C# using the Unity engine. The game utilised concepts in Quantum Physics in a puzzle-platformer, and went on to earn second place.",
		],
		url: "https://equs.org/events/games-2019",
	},
	portfolio: {
		name: "This Portfolio",
		desc: [
			"I find front end tech and React interesting, so I made this portfolio to showcase my skills and interest.",
			"In this project, I used Routing, Styled Components and Theme Provider. If you want more info on it, check out the github page or get in touch with me!",
		],
		url: "https://github.com/Owen-Very-Cool/Portfolio24",
	},
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Name /> },
			{ path: "about", element: <About /> },
			{ path: "works", element: <Works /> },
			{
				path: "works/axcelerate",
				element: (
					<Work
						name={workPages.aXcelerate.name}
						desc={workPages.aXcelerate.desc}
						url={workPages.aXcelerate.url}
						img={axcelerate}
					/>
				),
			},
			{
				path: "works/odyssey",
				element: (
					<Work
						name={workPages.odyssey.name}
						desc={workPages.odyssey.desc}
						url={workPages.odyssey.url}
						img={odyssey}
					/>
				),
			},
			{
				path: "works/crimeyboyz",
				element: (
					<Work
						name={workPages.crimey.name}
						desc={workPages.crimey.desc}
						url={workPages.crimey.url}
						img={crimey}
					/>
				),
			},
			{
				path: "works/ricketyship",
				element: (
					<Work
						name={workPages.rickety.name}
						desc={workPages.rickety.desc}
						url={workPages.rickety.url}
						img={rickety}
					/>
				),
			},
			{
				path: "works/slimecat",
				element: (
					<Work
						name={workPages.slimecat.name}
						desc={workPages.slimecat.desc}
						url={workPages.slimecat.url}
						img={slimecat}
					/>
				),
			},
			{
				path: "works/portfolio",
				element: (
					<Work
						name={workPages.portfolio.name}
						desc={workPages.portfolio.desc}
						url={workPages.portfolio.url}
						img={portfolio}
					/>
				),
			},
		],
	},
]);

const defaultTheme = {};

export default App;
