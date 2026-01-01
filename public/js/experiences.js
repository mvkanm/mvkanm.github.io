const experiences = [
    {
      company: "Suleyman Demirel University",
      role: "IT Student",
      period: "2025 — Present",
      place: "Almaty, Kazakhstan",
      description: "Studying information technology and web development.",
      tools: ['Java']
    },
    {
      company: "Personal Projects",
      role: "Frontend Learner",
      period: "2023 — Present",
      place: "Almaty, Kazakhstan",
      description: "Building websites and learning JavaScript.",
      tools: ['HTML/CSS', 'JavaScript', 'NodeJS']
    }];
function experienceTemplate(exp) {
    return `
    <div class="experiences-container">
        <div class="cases">
            <div class="cases-left">
                <h3>${exp.company}</h3>
                <p><strong>${exp.role}</strong></p>
            </div>
            <div class="cases-right">
                <p>${exp.place}</p>
                <p>${exp.period}</p>
            </div>
        </div>
        <div class="description">
          <p class="cases-text">${exp.description}</p>
        </div>
        <div class="tools">
          ${exp.tools.map(tool => `<span class="span-tools">${tool}</span>`).join("")}
        </div>
    </div>
  `;
}
const container = document.getElementById("experiences");

experiences.forEach(exp => {
  container.innerHTML += experienceTemplate(exp);
});