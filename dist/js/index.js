/* VARIABLES */

let APIURL = "https://api.github.com/repos/BertelsBenjamin/";
let GitURL = "https://github.com/BertelsBenjamin/";
let wantedRepos = [...document.getElementsByClassName("project")];
let gitHubRepos = JSON.parse(localStorage.getItem("gitHubRepos"));
let activeElement = document.getElementById("active");

/* SPANS CONTAINING DATA SELECTED BY ARIA_LABEL*/
let projectTitle = document.querySelector('[aria-label="project-title"]');
let projectTimeSpan = document.querySelector('[aria-label="project-timespan"]');
let projectDuration = document.querySelector('[aria-label="project-duration"]');
let projectSourceCode = document.querySelector(
  '[aria-label="project-sourcecode"]'
);
let projectTechnologies = document.querySelector(
  '[aria-label="project-technologies"]'
);
let projectDescription = document.querySelector(
  '[aria-label="project-description"]'
);

/* FUNCTIONS */

function setData(title, timespan, duration, technologies, description) {
  projectTitle.innerHTML = title;
  projectTimeSpan.innerHTML = timespan;
  projectDuration.innerHTML = duration;
  projectSourceCode.children[0].href = `${GitURL}/${projectTitle.innerHTML.toLowerCase()}`;
  projectTechnologies.innerHTML = technologies;
  projectDescription.innerHTML = description;
}

// Add Event Listeners to every clickable project (span, not wrapping div)
let elements = [...document.getElementsByClassName("project")];
elements.forEach((element) =>
  element.addEventListener("click", (e) => {
    let activeElement = document.getElementById("active");
    // Hardcoded the [0] because there's only one active project
    activeElement.id = "";
    e.srcElement.id = "active";
    activeElement = document.getElementById("active");
    switch (activeElement.ariaLabel) {
      case "patrimonium":
        setData(
          "Patrimonium",
          "11/2019 - 3/2020",
          "150h",
          "Angular, Express.js, MySQL",
          "SaaS project that automates the service department of a piano service company. It let's technicians log their activities and dispatchers generate data driven PDF reports."
        );
        break;
      case "baboos":
        setData(
          "Baboos",
          "A couple of hours.",
          "12h",
          "HTML5, Sass, ES6",
          "Static website for an imaginary hamburger restaurant."
        );
        break;
      case "spacex":
        setData(
          "SpaceX",
          "Another weekend during lockdown...",
          "18h",
          "GraphQL, React",
          "Useless application to display info about all kinds of information about SpaceX flights. I've built this to get into GraphQL and React."
        );
        break;
      case "portfolio_vanilla":
        setData(
          "Portfolio (Vanilla)",
          "June 2020",
          "24h",
          "Good old HTML5, Sass and vanilla Javasscript",
          "The very website you're looking at. Simple vanilla website for dislaying some projects I've worked on."
        );
        break;
    }
  })
);
