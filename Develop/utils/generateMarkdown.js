// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
 ${data.badge} 

 ## Description
 ${data.description}

 ## Table of Contents
 -Installation
 -Usage
 -Credits
 -License
 -Features
 -Contributions
 
 ## Installation 
 ${data.installation}

 ## Usage
 ${data.usage}

 ## Credits
 ${data.credits}

 ## License
 ${data.badge}
 ${data.license}
  
 ## Features
 ${data.features}

 ## Contributions
 ${data.contributions}
`;
}

module.exports = generateMarkdown;
