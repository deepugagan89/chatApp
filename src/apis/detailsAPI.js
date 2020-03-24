let details = null;

class userDetails {
    static setUserDetails(user) {
        details = JSON.parse(JSON.stringify(user));
    }
    static getUserDetails() {
        return details;
    }
}

export default userDetails;