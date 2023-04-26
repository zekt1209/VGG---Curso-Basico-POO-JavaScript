export default class Lesson {
    constructor({
        id,
        title,
    }) {
        this.id = id;
        this._title = title;
    }

    get title() {
        return this._title; 
    }

    set title(newTitle) {
        if (newTitle === "Bad Title") {
            console.error("Hey ... NO");
        } else {
            this._title = newTitle;
        }
    }

}

export {Lesson};