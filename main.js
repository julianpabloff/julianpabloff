const imageSources = [
	"games/bomberman.jpg",
	"games/bomberman.jpg",
	"games/bomberman.jpg",
	"games/solitaire.jpg",
	"games/ratscrew.jpg",
];
const projects = [
	{
		title: "Instaspam",
		description: "A photo sharing website similar to Instagram in which users can upload images and like other people's images.",
		imageUrl: "games/bomberman.jpg",
		technologies: ["React", "Node.js", "Express", "MongoDB"],
		sourceUrl: "https://github.com/Ne0nWinds/InstaSpam",
		siteUrl: ""
	},
	{
		title: "Wedding Planner",
		description: "A website for creating wedding events. Users can create an account, add events, and RSVP.",
		imageUrl: "games/bomberman.jpg",
		technologies: ["C#", ".NET", "SQL", "HTML", "CSS"],
		sourceUrl: "https://github.com/Ne0nWinds/InstaSpam",
		siteUrl: ""
	},
	{
		title: "BomberMan",
		description: "Inspired by a classic videogame, this app is a multiplayer game where you try to blow up the other players to win.",
		imageUrl: "games/bomberman.jpg",
		technologies: ["Javascript", "HTML", "CSS"],
		sourceUrl: "https://github.com/Ne0nWinds/BomberMan",
		siteUrl: ""
	},
	{
		title: "Solitaire",
		description: "A fully functional solitaire application that runs in the terminal. Features include color themes, and vim key support for fast gameplay",
		imageUrl: "games/solitaire.jpg",
		technologies: ["Javascript", "Node.js"],
		sourceUrl: "https://github.com/julianpabloff/solitaire",
		siteUrl: ""
	},
	{
		title: "Ratscrew",
		description: "A multiplayer card game application that mimics the game Egyptian Ratscrew. It supports 2 to 4 players and runs in the terminal.",
		imageUrl: "games/ratscrew.jpg",
		technologies: ["Javascript", "Node.js"],
		sourceUrl: "https://github.com/julianpabloff/ratscrew",
		siteUrl: ""
	}
];

const techImgUrls = {
	"HTML" : "technologies/html.png",
	"CSS" : "technologies/css.png",
	"Javascript" : "technologies/javascript.png",
	"Node.js" : "technologies/nodejs.png",
	"Express" : "technologies/express.png",
	"React" : "technologies/react.png",
	"C#" : "technologies/csharp.png",
	".NET" : "technologies/dotnet.png",
	"MongoDB" : "technologies/mongodb.png",
	"SQL" : "technologies/sql.png"
};

let selectedIndex = 0;

function selectProject(index) {
	let project = projects[index];

	// Highlight Button
	$("#project" + selectedIndex).removeClass("selected");
	$("#project" + index).addClass("selected");
	moveCursor(index);

	// Change Text
	$("#preview").css("background-image", "url(" + project.imageUrl + ")");
	$("#title").text(project.title);
	$("#description").text(project.description);

	// Tech icons
	$("#techs").empty();
	for(let tech of project.technologies) {
		let url = techImgUrls[tech];
		$("#techs").append("<div class=\"tech\" style=\"background-image: url(" + url + ");\"><span>" + tech + "</span></div>");
	}

	// Links
	$("#sourceUrl").attr("href", project.sourceUrl);
	$("#siteUrl").attr("href", project.siteUrl);

	selectedIndex = index;
}

function killCursor(index) {
	let cursor = document.getElementById("cursor");
	let top = 80 * index + 40;
	cursor.style.top = top.toString() + "px";
	cursor.style.height = "0px";
}

function moveCursor(index) {
	let cursor = document.getElementById("cursor");
	let top = 80 * index;
	cursor.style.top = top.toString() + "px";
}


$(document).ready(function() {
	selectProject(0);
});
