document.addEventListener('DOMContentLoaded', function() {
    const postCourseForm = document.getElementById('postCourseForm');
    const courseList = document.getElementById('courseList');
  
    // Array to hold posted courses (for demo purposes)
    let postedCourses = [];
  
    // Function to render course list
    function renderCourseList() {
      courseList.innerHTML = ''; // Clear existing list
  
      postedCourses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.innerHTML = `
          <div class="course-info">
            <h3>${course.courseTitle}</h3>
            <p>Description: ${course.description}</p>
            <p>Instructor: ${course.instructor}</p>
            <p>Duration: ${course.duration}</p>
            <p>Price: $${course.price}</p>
            <p>Schedule: ${course.schedule}</p>
          </div>
          <button class="view-details-btn" onclick="deleteCourse('${course.courseTitle}')">Delete</button>
        `;
        courseList.appendChild(courseItem);
      });
    }
  
    // Function to handle form submission for posting a course
    postCourseForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Retrieve form data
      const formData = new FormData(postCourseForm);
      const courseDetails = {
        courseTitle: formData.get('courseTitle'),
        description: formData.get('description'),
        instructor: formData.get('instructor'),
        duration: formData.get('duration'),
        price: formData.get('price'),
        schedule: formData.get('schedule')
      };
  
      // Add course to the posted courses array
      postedCourses.push(courseDetails);
  
      // Render updated course list
      renderCourseList();
  
      // Clear form fields
      postCourseForm.reset();
    });
  
    // Function to handle course deletion
    window.deleteCourse = function(courseTitle) {
      postedCourses = postedCourses.filter(course => course.courseTitle !== courseTitle);
      renderCourseList();
    };
  
    // Initial rendering of course list
    renderCourseList();
  });
  