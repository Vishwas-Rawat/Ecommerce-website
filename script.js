let course = [
    {
      id: 1,
      name: "The Complete 2024 Web Development Bootcamp",
      price: 3000,
      description:
        "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
      hours: 62,
      lectures: 373,
    },
  
    {
      id: 2,
      name: "The Complete 2024 android dev course",
      price: 3000,
      description:
        "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
      hours: 62,
      lectures: 373,
    },
    {
      id: 3,
      name: "Master data science",
      price: 3000,
      description:
        "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
      hours: 62,
      lectures: 373,
    },
  ];
  
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