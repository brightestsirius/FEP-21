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
		role: "lector"
	}
];

class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    getCourses(){
        if(this.courses){
            return this.courses
                .map(course => {
                    let courseInfo = Object
                        .keys(course)
                        .map(key => `${key}: ${course[key]}`)
                        .join(`;\n`);

                    return courseInfo;
                })
                .join(`\n-------------\n`);
        } else {
            return `${this.name} has no courses yet`;
        }
    }
}

users
    .map(user => new User(user))
    .forEach(user => console.log(user.getCourses())); 


document.write(`<div class="users">${renderTable(users)}</div>`);