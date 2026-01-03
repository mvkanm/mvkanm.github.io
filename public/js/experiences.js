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
      <div class="max-w-screen-md px-4 mx-auto py-6 border-b border-black/10 dark:border-white/10">
  
          <!-- header -->
          <div class="flex items-start justify-between gap-4">
              <div>
                  <h3 class="text-lg font-semibold dark:text-dark-darkText">
                      ${exp.company}
                  </h3>
                  <p class="font-medium text-sm opacity-80 text-light-lightText dark:text-dark-darkText">
                      ${exp.role}
                  </p>
              </div>
  
              <div class="text-right text-sm opacity-70 whitespace-nowrap">
                  <p class="text-light-lightText dark:text-dark-darkText">${exp.place}</p>
                  <p class="text-light-lightText dark:text-dark-darkText">${exp.period}</p>
              </div>
          </div>
  
          <!-- description -->
          <p class="mt-3 text-sm leading-relaxed opacity-90 text-light-lightText dark:text-dark-darkText">
              ${exp.description}
          </p>
  
          <!-- tools (EXACT match of your old CSS) -->
          <div class="mt-4 flex flex-wrap gap-[10px]">
              ${exp.tools.map(
                  tool => `
                      <span class="
                          font-normal
                          text-light-lightText dark:text-dark-darkText
                          bg-light-lightBtnColor dark:bg-dark-darkBtnColor
                          border border-black/[0.081]
                          rounded-[5px]
                          px-[5px] py-[3px]
                          text-xs
                      ">
                          ${tool}
                      </span>
                  `
              ).join("")}
          </div>
  
      </div>
      `;
  }
const container = document.getElementById("experiences");

experiences.forEach(exp => {
  container.innerHTML += experienceTemplate(exp);
});