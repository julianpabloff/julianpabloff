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
		imageUrl: "games/instaspam.jpg",
		technologies: ["React", "Node.js", "Express", "MongoDB"],
		sourceUrl: "https://github.com/Ne0nWinds/InstaSpam",
		siteUrl: ""
	},
	{
		title: "Wedding Planner",
		description: "A website for creating wedding events. Users can create an account, add events, and RSVP.",
		imageUrl: "games/wedding.jpg",
		technologies: ["C#", ".NET", "SQL"],
		sourceUrl: "https://github.com/julianpabloff/wedding_planner",
		siteUrl: ""
	},
	{
		title: "BomberMan",
		description: "Inspired by a classic videogame, this app is a multiplayer game where you try to blow up the other players to win.",
		imageUrl: "games/bomberman.jpg",
		technologies: ["Javascript", "Socket.io", "Node.js", "Express"],
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
	"SQL" : "technologies/sql.png",
	"Socket.io" : "technologies/socketio.png"
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
		$("#techs").append("<div class=\"tech\"><img src=\"" + url + "\"><span>" + tech + "</span></div>");
		//$("#techs").append("<div class=\"tech\" style=\"background-image: url(" + url + ");\"><span>" + tech + "</span></div>");
	}

	// Links
	$("#sourceUrl").attr("href", project.sourceUrl);
	$("#siteUrl").attr("href", project.siteUrl);

	selectedIndex = index;
}

function cycleProject(direction) {
	let index = (selectedIndex + direction + projects.length) % projects.length;
	selectProject(index);
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

	let windowWidth = $(window).width();
	let arrowButtonsActive = true;

	function setSize() {
		windowWidth = $(window).width();
		if (windowWidth <= 750) {
			$("button.arrow_btn").css("background-color", "rgba(200,200,200,0.4)");
		} else {
			$("button.arrow_btn").css("background-color", "transparent");
		}
		if (windowWidth < 1040) {
			arrowButtonsActive = true;
			$("button.arrow_btn").removeClass("hidden");
		} else {
			arrowButtonsActive = false;
			$("button.arrow_btn").addClass("hidden");
		}
	}
	setSize();

	$(window).resize(() => setSize());
	
	$("button.arrow_btn").click(function() {
		if (arrowButtonsActive) {
			let id = $(this).attr("id");
			if (id == "left_arrow") cycleProject(-1);
			else if (id == "right_arrow") cycleProject(1);

			if (windowWidth <= 750) {
			// Light up little buttons
			$(this).css("background-color", "rgba(200,200,200,0.8)");
			setTimeout(() => {
				$(this).css("background-color", "rgba(200,200,200,0.4)");
			}, 200);
			}
		}
	});

	$("button.arrow_btn").mouseenter(function() {
		if ($(window).width() > 770 && arrowButtonsActive)
			$(this).css("background-color", "rgba(200,200,200,0.4)");
	});
	$("button.arrow_btn").mouseleave(function() {
		if ($(window).width() > 770 && arrowButtonsActive)
			$(this).css("background-color", "transparent");
	});
});
