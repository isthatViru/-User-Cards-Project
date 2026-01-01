const users = [
  {
    name: "Arjun Sharma",
    role: "Frontend Developer",
    info: "Creates responsive user interfaces using HTML, CSS, JavaScript, and React.",
    img: "https://plus.unsplash.com/premium_photo-1689533448099-2dc408030f0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },
  {
    name: "Neha Verma",
    role: "Backend Developer",
    info: "Builds scalable APIs using Node.js, Express, and MongoDB.",
    img: "https://plus.unsplash.com/premium_photo-1689708385255-fe5ee98674ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Rahul Singh",
    role: "Full Stack Developer",
    info: "Works across frontend and backend with MERN stack.",
    img: "https://plus.unsplash.com/premium_photo-1757649996897-43469f4caf2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },
  {
    name: "Ananya Patel",
    role: "UI/UX Designer",
    info: "Designs intuitive user experiences and clean visual systems.",
    img: "https://plus.unsplash.com/premium_photo-1733608178136-47228667977f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Vikram Rao",
    role: "DevOps Engineer",
    info: "Manages deployments, CI/CD pipelines, and cloud infrastructure.",
    img: "https://plus.unsplash.com/premium_photo-1705563088246-3673a401ed6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    name: "Pooja Mehta",
    role: "Product Manager",
    info: "Bridges business goals with technical execution.",
    img: "https://plus.unsplash.com/premium_photo-1723928450287-7e5463f9c9ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"
  },
  {
    name: "Karan Malhotra",
    role: "QA Engineer",
    info: "Ensures product quality through manual and automated testing.",
    img: "https://plus.unsplash.com/premium_photo-1733971878574-4d1d01489603?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sneha Iyer",
    role: "Data Analyst",
    info: "Analyzes data to generate actionable business insights.",
    img: "https://plus.unsplash.com/premium_photo-1681505480429-158f39006b2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8"
  },
  {
    name: "Aman Gupta",
    role: "Mobile App Developer",
    info: "Builds Android and iOS apps using modern frameworks.",
    img: "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    name: "Ritika Sen",
    role: "Technical Writer",
    info: "Creates clear documentation and guides for developers.",
    img: "https://plus.unsplash.com/premium_photo-1669101752314-ac4a66e8e716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8"
  }
];
const cardsContainer = document.querySelector(".cards");
const ipt = document.querySelector(".ipt");

// render function
function getUsers(arr) {
  cardsContainer.innerHTML = ""; // clear once, not repeatedly

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    const pic = document.createElement("img");
    pic.src = user.img;
    pic.className = "pic";

    const cardBody = document.createElement("div");
    cardBody.className = "cardBody";

    const name = document.createElement("h5");
    name.className = "name";
    name.textContent = user.name;

    const info = document.createElement("p");
    info.className = "info";
    info.textContent = user.info;

    cardBody.append(name, info);
    card.append(pic, cardBody);
    cardsContainer.appendChild(card);
  });
}

// initial render
getUsers(users);

// search
ipt.addEventListener("input", () => {
  const value = ipt.value.trim().toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  if (filteredUsers.length===0) {
   cardsContainer.innerHTML="<h1>User Not Found<h1>";
   return;
    
  }
  getUsers(filteredUsers);
});
