export class Utilities {
    // authenticate the user
    static authenticateUser = (formData) => {
        if (formData.password === "admin" && formData.username === "admin") {
            return formData.username;
        } else {
           return false
        }
    }
}





