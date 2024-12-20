function loadFromLocalStorage(){
    let courses = [];
    let storedCourse = localStorage.getItem('Course')
    let cart = localStorage.getItem('Cart');
    console.log(storedCourse);
    console.log(cart);
    if(storedCourse){
        courses = JSON.parse(storedCourse); 
    }
    return courses;
}

function addToCart(id){
    let cart = JSON.parse(localStorage.getItem('Cart'));
    let selectedCourse = courses.find((c)=>c.id == id)
    if(selectedCourse){
    console.log("Up: "+cart);
    console.log("down: "+selectedCourse);
    cart.push(selectedCourse);
    saveToLocalStorage(cart);
    console.log(`Added course ID ${id} to cart.`);
    } else {
        console.error("Course not found for ID:", id);
    }
}


function saveToLocalStorage(cart){
    localStorage.setItem("Cart", JSON.stringify(cart));
}

let courseList = document.getElementById('prodlist');
function renderProduct(courses){
    courseList.innerHTML = courses.map((course)=>
        `
            <div class="col-md-6 col-lg-4  mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${course.name}</h5>
                  <p>Price: ₹${course.price}</p>
                  <p class="card-text text-success">${course.description}</p>
                  <p>Hours: ${course.hours}</p>
                  <p>Lectures: ${course.lectures}</p>
                  <button class='btn btn-primary' onclick='addToCart(${course.id})'>Add To Cart</button>
                 </div>
              </div>
            </div>
          `
    ).join('');
}

let courses = loadFromLocalStorage();
renderProduct(courses);
