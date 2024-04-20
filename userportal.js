document.addEventListener('DOMContentLoaded', () => {
    const courseListContainer = document.getElementById('course-list');
    const registeredCoursesContainer = document.getElementById('registered-courses');
    const totalCostDisplay = document.getElementById('total-cost');
  
    const courses = [
      {
        id: 1,
        title: 'Digital Marketing Fundamentals',
        description: 'Learn the essentials of digital marketing strategies and tools to boost online presence.',
        instructor: 'John Doe',
        duration: '6 weeks',
        price: 99,
        imageUrl: 'exp1.jpg'
      },
      {
        id: 2,
        title: 'Introduction to Data Science',
        description: 'Dive into the basics of data science, including analytics and visualization techniques.',
        instructor: 'Jane Smith',
        duration: '8 weeks',
        price: 149,
        imageUrl: 'exp2.jpg'
      },
      {
        id: 3,
        title: 'Web Development',
        description: 'Master web development fundamentals, from HTML/CSS to JavaScript and responsive design.',
        instructor: 'Alice Johnson',
        duration: '12 weeks',
        price: 199,
        imageUrl: 'exp3.jpg'
      }
    ];
  
    let registeredCourses = [];
  
    
    const renderCourses = () => {
      courseListContainer.innerHTML = '';
      courses.forEach((course) => {
        const courseCard = createCourseCard(course);
        courseListContainer.appendChild(courseCard);
      });
    };
  
    
    const createCourseCard = (course) => {
      const { id, title, description, instructor, duration, price, imageUrl } = course;
  
      const courseCard = document.createElement('div');
      courseCard.classList.add('course');
  
      courseCard.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <div class="course-details">
          <h3>${title}</h3>
          <p><b>Description:</b> ${description}</p>
          <p><b>Instructor:</b> ${instructor}</p>
          <p><b>Duration:</b> ${duration}</p>
          <p><b>Price:</b> $${price}</p>
          <button class="register-btn" data-id="${id}" data-title="${title}" data-price="${price}">Register</button>
        </div>
      `;
  
      return courseCard;
    };
  
  
    const registerCourse = (id, title, price) => {
      const course = courses.find(course => course.id === id);
      registeredCourses.push({ id, title, price });
  
      const courseCard = createCourseCard(course);
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        registeredCourses = registeredCourses.filter(course => course.id !== id);
        registeredCoursesContainer.removeChild(courseCard);
        updateTotalCost();
      });
  
      courseCard.querySelector('.course-details').appendChild(deleteBtn);
      registeredCoursesContainer.appendChild(courseCard);
  
      updateTotalCost();
    };
  
   
    const updateTotalCost = () => {
      const totalCost = registeredCourses.reduce((total, course) => total + course.price, 0);
      totalCostDisplay.textContent = `$${totalCost}`;
    };
  
    
    courseListContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('register-btn')) {
        const id = parseInt(event.target.dataset.id);
        const title = event.target.dataset.title;
        const price = parseInt(event.target.dataset.price);
        registerCourse(id, title, price);
      }
    });
  
   
    renderCourses();
  });
    