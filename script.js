let course = [
  {
    id: 1,
    name: "The Complete 2024 Web Development Bootcamp",
    price: 3000,
    description:
      "Become a Full-Stack Web Developer with just ONE course. Learn HTML, CSS, Javascript, Node, React, PostgreSQL, and Web3.",
    hours: 62,
    lectures: 373,
  },
  {
    id: 2,
    name: "The Complete Android Development Course",
    price: 2800,
    description:
      "Master Android development from scratch. Build real-world mobile apps using Java and Kotlin.",
    hours: 45,
    lectures: 300,
  },
  {
    id: 3,
    name: "Master Data Science and Machine Learning",
    price: 3200,
    description:
      "Learn Python, Pandas, Scikit-learn, and TensorFlow to become a data scientist.",
    hours: 75,
    lectures: 450,
  },
  {
    id: 4,
    name: "Advanced React and Redux",
    price: 2500,
    description:
      "Deep dive into React.js and Redux. Learn advanced hooks, state management, and performance optimization.",
    hours: 50,
    lectures: 200,
  },
  {
    id: 5,
    name: "The Complete Python Developer Course",
    price: 2000,
    description:
      "Learn Python from beginner to advanced level. Build games, scripts, and web apps with Django.",
    hours: 40,
    lectures: 180,
  },
  {
    id: 6,
    name: "Ethical Hacking and Cybersecurity",
    price: 4000,
    description:
      "Learn penetration testing, network security, and ethical hacking techniques.",
    hours: 60,
    lectures: 300,
  },
  {
    id: 7,
    name: "Full-Stack Java with Spring Boot",
    price: 3500,
    description:
      "Build REST APIs and enterprise-grade applications using Java, Spring Boot, and Hibernate.",
    hours: 55,
    lectures: 220,
  },
  {
    id: 8,
    name: "Master Cloud Computing with AWS",
    price: 4200,
    description:
      "Learn AWS services like EC2, S3, RDS, and Lambda to become a cloud expert.",
    hours: 70,
    lectures: 310,
  },
  {
    id: 9,
    name: "UI/UX Design Bootcamp",
    price: 1800,
    description:
      "Learn the fundamentals of UI/UX design with Figma, Adobe XD, and user research techniques.",
    hours: 35,
    lectures: 150,
  },
  {
    id: 10,
    name: "DevOps Mastery with Docker and Kubernetes",
    price: 3800,
    description:
      "Learn CI/CD pipelines, Docker containerization, and Kubernetes orchestration.",
    hours: 65,
    lectures: 270,
  },
];

// Generate 40 more items programmatically
for (let i = 11; i <= 50; i++) {
  course.push({
    id: i,
    name: `Course ${i}`,
    price: Math.floor(Math.random() * 5000) + 1000, // Random price between 1000 and 6000
    description: `This is a description for Course ${i}. It is designed to help you master advanced concepts in programming and technology.`,
    hours: Math.floor(Math.random() * 50) + 20, // Random hours between 20 and 70
    lectures: Math.floor(Math.random() * 300) + 100, // Random lectures between 100 and 400
  });
}

console.log(course);

  let cart = [];
  
  
  function saveToLocalStorage() {
    localStorage.setItem("Course", JSON.stringify(course));
    localStorage.setItem("Cart", JSON.stringify(cart))
  }
  saveToLocalStorage();
  
  function renderProduct() {
    document.getElementById("renderCard").innerHTML = course
      .map(
        (elem) =>
          `<div class="col-lg-4 col-md-12 col-sm-12 mb-4">
          <div class="card" style="width: 100%;">
    <div class="card-body">
      <h5 style="font-size: 20px" class="card-title">${elem.name}</h5>
      <p class="card-text">${elem.description}</p>
      <p class="card-text">${"₹" + elem.price}</p>
      <p class="card-text">${
        elem.hours + " total hours . " + elem.lectures + " lectures"
      }</p>
      <a style = "font-size: 18px" onclick = "editCourse(${
        elem.id
      })" href="#" class="btn btn-primary font-weight-bold">Edit</a>
      <a style = "font-size: 18px" onClick = "deleteItem(${
        elem.id
      })" href="#" class="btn btn-warning font-weight-bold">Delete</a>
    </div>
  </div>
  </div>`
      )
      .join("");
  }
  renderProduct();
  
  function deleteItem(id) {
    let findCourse = course.find((c)=>c.id === id);
    if(findCourse){
      let index = course.indexOf(findCourse);
      course.splice(index, 1);
      saveToLocalStorage();
      renderProduct();
    }
    
  }
  
  function addNewItem() {
    let newItemID = course.length > 0 ? course[course.length - 1].id + 1 : 1;
    console.log("new item id = " + newItemID);
    let newItem = {
      id: newItemID,
      name: document.getElementById("pName").value,
      price: Number(document.getElementById("pPrice").value),
      description: document.getElementById("pDescription").value,
      hours: Number(document.getElementById("pHours").value),
      lectures: Number(document.getElementById("pLectures").value),
    };
    console.log("Reached here");
  
    course.push(newItem);
    saveToLocalStorage();
    renderProduct();
  }
  

  function editCourse(id) {
    course.find((c) => {
      if (c.id == id) {
        document.getElementById("pName").value = c.name;
        document.getElementById("pPrice").value = c.price;
        document.getElementById("pDescription").value = c.description;
        document.getElementById("pHours").value = c.hours;
        document.getElementById("pLectures").value = c.lectures;
        let addItemBtn = document.querySelector('button[onclick="addNewItem()"]');
        addItemBtn.innerHTML = "Save";
        addItemBtn.onclick = function () {
          updateCourse(id);
          addItemBtn.textContent = "Add Item";
          addItemBtn.onclick = function () {
            addNewItem();
          };
        };
      }
    });
  }
  
  function updateCourse(id) {
    course.find((c) => {
      console.log(c.id);
      console.log(id);
      if (c.id == id) {
        c.name = document.getElementById("pName").value;
        c.price = document.getElementById("pPrice").value;
        c.description = document.getElementById("pDescription").value;
        c.hours = document.getElementById("pHours").value;
        c.lectures = document.getElementById("pLectures").value;
        saveToLocalStorage();
        renderProduct();
        document.getElementById("pName").value = "";
        document.getElementById("pPrice").value = "";
        document.getElementById("pDescription").value = "";
        document.getElementById("pHours").value = "";
        document.getElementById("pLectures").value = "";
        document.querySelector('button[onclick="addNewItem()"]').innerHTML = "Add Item";
      }
    });
  }