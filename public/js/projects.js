const projects = [
    {
        image: './public/img/secondProject.png',
        name: 'mukan.kz',
        description: 'Portfolio website that you are currently on!',
        button: 'https://www.flaticon.com/free-icons/instagram-logo'
    },
    {
        image: './public/img/firstProject.png',
        name: 'Template-based website',
        description: 'First frontend practice project focused on layout and styling.',
        button: 'https://www.flaticon.com/free-icons/instagram-logo'
    }];
function projectsTemplate(prj) {
    return `
    <div class="projects-container">
        <img id="projects-img" src="${prj.image}">
        <div class="projects-text">
            <h3>${prj.name}</h3>
            <p>${prj.description}</p>
            <a id="github-button" href="${prj.button}"><img id="github-logo" src="./public/img/github.png">Github</a>
        </div>   
    </div>
  `;
}
const container = document.getElementById("projects");

projects.forEach(prj => {
  container.innerHTML += projectsTemplate(prj);
});