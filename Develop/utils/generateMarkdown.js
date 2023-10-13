// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
 ${data.licenseBadge} 

 ## Description
 ${data.description}

 ## Table of Contents
 
 

  
`;
}

module.exports = generateMarkdown;
