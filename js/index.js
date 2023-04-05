
  const subjects = {
  1: {
      title: "Mechanical Energy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "./images/mechanical.jpeg" 
  },
  2: {
      title: "Thermal Energy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "./images/thermal.jpeg" 
  },
  3: {
      title: "Nuclear Energy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "./images/nuclear.jpeg" 
  }
  };
 
  const buttons = document.querySelectorAll(".button-group button");
  const content = document.querySelector("#content");
  
  
  buttons.forEach(function(button) {
  button.addEventListener("click", function() {
  buttons.forEach(function(btn) {
  btn.classList.remove("active-button");
  });
        
  button.classList.add("active-button");
        
  const id = button.getAttribute("id").slice(-1);
  const subject = subjects[id];

  content.innerHTML = `
  <h2>${subject.title}</h2>
  <img src="${subject.image}" alt="${subject.title} Image">
  <p>${subject.content}</p>`;
  });
  });



  buttons[0].classList.add("active-button");


  const mediaQuery = window.matchMedia('(min-width: 30rem)');
  const container = document.querySelector('.container');
  const masthead = document.querySelector('.masthead');

  function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
  container.style.fontSize = '1.2rem';
  masthead.style.height = '50vh';
  } 
  else {
  container.style.fontSize = '1rem';
  }
  }

  handleMediaQuery(mediaQuery);
  mediaQuery.addListener(handleMediaQuery);
