const colors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  PHP: "#777bb4",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
};

export default function githubLanguageColor(language) {
  return colors[language] ?? "#8b949e";
}