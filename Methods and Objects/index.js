var user = {
    firstName : "Ramu",
    lastName : "Paluri",
    role: "Developer",
    loginCount: 3780,
    facebookSignedIN: true,
    courseList: [1,2,3],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

};

var courseList = true;
console.log(user.role);
console.log(user.getCourseCount());