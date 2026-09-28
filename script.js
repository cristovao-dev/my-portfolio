// A curated selection of repositories on github.com/cristovao-dev.
// Private repositories are intentionally shown as previews without source links.
const projects = [
  {
    name: "WorldWar-StrategyGame",
    description: "A TypeScript strategy game project.",
    language: "TypeScript",
    category: "game",
    private: true
  },
  {
    name: "TD_Red-Dead",
    description: "A tower defense game project.",
    language: "TypeScript",
    category: "game",
    private: true
  },
  {
    name: "Cozy-Pixel-Farm-Game",
    description: "A cozy pixel farm game project.",
    language: "JavaScript",
    category: "game",
    private: true
  },
  {
    name: "Thornhaven",
    description: "A city simulation game project.",
    language: "GDScript",
    category: "game",
    private: true
  },
  {
    name: "financesapp-vibecoded",
    description: "A personal finance app project.",
    language: "Kotlin",
    category: "app",
    private: true
  },
  {
    name: "comicbook-app",
    description: "A comic book app experiment.",
    language: "TypeScript",
    category: "app",
    private: true
  },
  {
    name: "web-fpsgame",
    description: "A first-person browser game experiment.",
    language: "JavaScript",
    category: "game",
    private: true
  },
  {
    name: "mywebsite",
    description: "A public HTML website repository.",
    language: "HTML",
    category: "app",
    private: false,
    url: "https://github.com/cristovao-dev/mywebsite"
  },
  {
    name: "chatapp-vibecoded",
    description: "An AI chat app with desktop and web versions.",
    language: "Python",
    category: "app",
    private: true
  },
  {
    name: "notetaking-vibecoded",
    description: "A note-taking app project.",
    language: "JavaScript",
    category: "app",
    private: true
  },
  {
    name: "local-ai-transcriptor",
    description: "A local AI transcription project.",
    language: "Python",
    category: "app",
    private: true
  },
  {
    name: "noteapp-playground",
    description: "A playground for small apps and local AI experiments.",
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
