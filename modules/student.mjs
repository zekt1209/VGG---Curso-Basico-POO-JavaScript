export default class Student {
    constructor({
        id,
        name,
        email,
        username,
        points,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.id = id;
        this.email = email;
        this._name = name;
        this.username = username;
        this.points = points;
        this.socialMedia = {
            twitter: twitter,
            instagram: instagram,
            facebook: facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName === "Bad Name") {
            console.error("Hey ... NO");
        } else {
            this._name = newName;
        }
    }
};