let courses = [
    { id: 1, title: "ReactJS Tutorial", rating: 4.2 },
    { id: 2, title: "Angular Tutorial", rating: 2.5 },
    { id: 3, title: "VueJS Tutorial", rating: 3.8 },
    { id: 4, title: "Java Tutorial", rating: 4 },
    { id: 5, title: "JavaScript Tutorial", rating: 3.5 }
  ];
  
  // Lọc các khóa học có rating lớn hơn hoặc bằng 4
  let highRatedCourses = courses.filter(course => course.rating >= 4);
  
  // Xuất ra màn hình tiêu đề của các khóa học
  highRatedCourses.forEach(course => console.log(course.title));