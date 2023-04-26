export default class Teacher {
    constructor({
        id,
        name,
        speciality,
    }) {
        this._id = id;
        this.name = name;
        this.speciality = speciality;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        if (newId === "Bad ID") {
            console.error("Hey ... This ID is already assigned to other teacher");
        } else {
            this._id = newId;
        }
    }
}