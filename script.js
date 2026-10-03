// A curated selection of repositories on github.com/cristovao-dev.
// Private repositories are intentionally shown as previews without source links.
const projects = [
  {
    name: "web-strategy-game-worldatwar",
    description: "A solo, turn-based strategy game about planning, economy and diplomacy, played in the browser.",
    language: "TypeScript",
    category: "game",
    private: true
  },
  {
    name: "web-td-undead-frontier",
    description: "A pixel-art tower defense game for the browser: place your defenses and hold out through the waves.",
    language: "TypeScript",
    category: "game",
    private: true
  },
  {
    name: "web-farm-game-multiplayer",
    description: "A cozy pixel-art farming game for the browser, to enjoy alone or with friends.",
    language: "JavaScript",
    category: "game",
    private: true
  },
  {
    name: "godot-thornhaven",
    description: "A medieval village-building game made with Godot: grow a small community through the seasons.",
    language: "GDScript",
    category: "game",
    private: true
  },
  {
    name: "my-finance-app",
    description: "A private, offline-first app for keeping track of my finances and planning ahead.",
    language: "Kotlin",
    category: "app",
    private: true
  },
  {
    name: "web-comicbook-app",
    description: "A reading app that makes it easier to organize and read comic books.",
    language: "TypeScript",
    category: "app",
    private: true
  },
  {
    name: "web-fpsgame",
    description: "A fast-paced, low-poly first-person arena game for the browser, solo or co-op.",
    language: "JavaScript",
    category: "game",
    private: true
  },
  {
    name: "my-portfolio",
    description: "The source code of this portfolio website.",
    language: "HTML",
    category: "app",
    private: false,
    url: "https://github.com/cristovao-dev/my-portfolio"
  },
  {
    name: "py-ai-chat-hub",
    description: "A chat app for talking with AI assistants, with desktop and web versions.",
    language: "Python",
    category: "app",
    private: true
  },
  {
    name: "web-notes-app-enhanced",
    description: "A note-taking app that also lets you record or import voice notes and turn them into text.",
    language: "JavaScript",
    category: "app",
    private: true
  },
  {
    name: "local-ai-transcriptor",
    description: "A small tool that turns speech into text, running entirely on my own computer.",
    language: "Python",
    category: "app",
    private: true
  },
  {
    name: "playground-hub",
    description: "A sandbox for small apps and experiments with AI models running on my own computer.",
    language: "Python",
    category: "app",
    private: true
  }
];

const repoGrid = document.querySelector("#repo-grid");
const repoStatus = document.querySelector("#repo-status");
const filterButtons = [...document.querySelectorAll(".filter-button")];

document.querySelector("#year").textContent = new Date().getFullYear();

function matchesFilter(project, filter) {
  if (filter === "all") return true;
  if (filter === "private") return project.private;
  if (filter === "public") return !project.private;
  return project.category === filter;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "repo-card";

  const heading = document.createElement("h3");
  if (project.url) {
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `${project.name} source (opens in a new tab)`);
    link.textContent = project.name;
    heading.append(link);
  } else {
    heading.textContent = project.name;
  }

  const description = document.createElement("p");
  description.textContent = project.description;

  const meta = document.createElement("div");
  meta.className = "repo-meta";

  const language = document.createElement("span");
  language.className = "tag";
  language.textContent = project.language;

  const visibility = document.createElement("span");
  visibility.className = project.private ? "tag private" : "tag accent";
  visibility.textContent = project.private ? "Private preview" : "Public source";

  meta.append(language, visibility);
  card.append(heading, description, meta);
  return card;
}

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => matchesFilter(project, filter));
  repoGrid.replaceChildren(...visible.map(createProjectCard));
  repoStatus.textContent = `Showing ${visible.length} project${visible.length === 1 ? "" : "s"}.`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
