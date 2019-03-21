/**
 * Using ES6-style classes
 * See below for an alternative ES5-prototype solution setup
 */

class User {
    constructor(name, lastLoggedInAt = null) {
        this._name = name;
        this._loggedIn = false;
        this.lastLoggedInAt = null;
    }

    isLoggedIn() {
        return this._loggedIn;
    }

    getLastLoggedInAt() {
        return this.lastLoggedInAt;
    }

    logIn() {
        this._loggedIn = true;
        this.lastLoggedInAt = new Date();
    }

    logOut() {
        this._loggedIn = false;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    canEdit(comment) {
        if (comment.getAuthor().getName() === this._name) {
            return true;
        }
        return false;
    }

    canDelete(comment) {
        return false;
    }
}

class Moderator extends User {
    constructor(name) {
        super(name);
    }
    canDelete(comment) {
        return true;
    }
}

class Admin extends Moderator {
    constructor(name) {
        super(name);
    }
    canEdit(comment) {
        return true;
    }
}

class Comment {
    constructor(author, message, repliedTo = null) {
        this._author = author;
        this._message = message;
        this._repliedTo = repliedTo;
        this.createdAt = new Date();
    }

    getMessage() {
        return this._message;
    }

    setMessage(message) {
        this._message = message;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    getAuthor() {
        return this._author;
    }

    getRepliedTo() {
        return this._repliedTo;
    }

    toString() {
        if (!this._repliedTo) {
            return `${this._message} by ${this._author.getName()}`;
        } else {
            return `${this._message} by ${this._author.getName()} (replied to ${this._repliedTo.getAuthor().getName()})`;
        }
    }
}

const user = new User('User 1');

user.setName('User 2');
console.log(user.getName());