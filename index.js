const fetch = require("node-fetch");

const reposArray = [
  "readme_generator",
  "portfolio",
  "weather_app",
  "day_planner",
  "javascript_quiz",
  "password_generator",
  "horiseon_refactor",
  "prework-about-me"
];

function setModifiedDate() {
  const url = "https://api.github.com/users/brandonfordd";

  const options = {
    headers: {
      Authorization: "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"
    }
  };

  fetch(url, options)
    .then( res => res.json() )
    .then( data => console.log(data)
    );
}

setModifiedDate();



    
