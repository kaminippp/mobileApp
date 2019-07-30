export class Authentication {

    static accessToken = "";
    static user = {};

    // the method signature will be same
    static save(accessToken) {
        Authentication.accessToken = accessToken;
    }

    static load() {
        return Authentication.accessToken;
    }

    static reset() {
        Authentication.accessToken = "";
    }

    static saveUser(user) {
        Authentication.user = user;
    }

    static loadUser() {
        return Authentication.user;
    }

    static resetUser() {
        Authentication.user = {};
    }
}