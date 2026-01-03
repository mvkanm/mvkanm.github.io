const projects = [
    {
        image: './public/img/secondProject.png',
        name: 'mukan.kz',
        description: 'Portfolio website that you are currently on!',
        button: 'https://github.com/mvkanm/mvkanm.github.io'
    },
    {
        image: './public/img/firstProject.png',
        name: 'Template-based website',
        description: 'First frontend practice project focused on layout and styling.',
        button: 'https://github.com/mvkanm/templateCopy1'
    }];
    function projectsTemplate(prj) {
        return `
        <div class="projects-container
                    flex flex-col md:flex-row
                    justify-between gap-[50px]
                    bg-white dark:bg-dark-white
                    rounded-[5px]
                    p-[25px]
                    my-[20px]
                    shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.08)]">

            <!-- image -->
            <img
                src="${prj.image}"
                alt="${prj.name}"
                class="projects-img
                       w-full md:w-1/2
                       h-auto
                       rounded-[5px]
                       opacity-80">
    
            <!-- text -->
            <div class="projects-text flex flex-col justify-between gap-4 md:w-1/2">
                <div>
                    <h3 class="m-0 font-semibold text-lg dark:text-dark-darkText">
                        ${prj.name}
                    </h3>
    
                    <p class="mt-2 text-sm leading-relaxed dark:text-dark-darkText">
                        ${prj.description}
                    </p>
                </div>
                <a
                    href="${prj.button}"
                    class="github-button
                           w-[100px] h-[30px]
                           flex items-center justify-center gap-[5px]
                           bg-light-lightBtnColor dark:bg-dark-darkBtnColor
                           border border-light-lightBorder dark:border-dark-darkBorder
                           rounded-[8px]
                           cursor-pointer
                           text-sm dark:text-dark-darkText">
                    <img
                        src="./public/img/github.png"
                        class="w-[20px] h-[20px] dark:invert">
    
                    Github
                </a>
    
            </div>
        </div>
        `;
    }
const container = document.getElementById("projects");

projects.forEach(prj => {
  container.innerHTML += projectsTemplate(prj);
});