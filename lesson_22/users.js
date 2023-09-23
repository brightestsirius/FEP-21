const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

console.log(users);

class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    render(){
        return `<div class="user">
            <p>${this.name}</p>
            ${this.renderCourses()}
        </div>`
    }

    renderCourses(){
        let coursesBlock = ``;

        if(this.courses){
            coursesBlock = `<div class="courses">
                ${this.courses
                    .map(course => {
                        return `<div class="course">
                            <p>${course.title}</p>
                            <p>${course.mark}</p>
                        </div>`
                    })
                    .join(``)
                }
            </div>`;
        }

        return coursesBlock;
    }
}

let classUsers = users
    .map(user => new User(user))
    .map(user => user.render())
    .join(``);

console.log(classUsers);

document.write(`<div class="users">${classUsers}</div>`)