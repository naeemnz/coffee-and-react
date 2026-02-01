import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";

// agar apki app ya backenmd service change hoti he to humen yahan par change karna he, UI/UX ko hum chnage nahi karenge, humen sirf parameters same rakhne hen aur in functions ko call karna he  

export class AuthService {

    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
        }
        async createAccount({email, password, name}) {
            try {
                const userAccount =await this.account.create
                (ID.unique(), email, password, name);
                if(userAccount) {
                    //call another method
                    return this.login({email, password});
                } else {
                    return userAccount;
                }
            } catch (error) {
                throw error;
            }
        }
        async login({email, password}) {
            try {
                return await this.account.createEmailPasswordSession(email, password);
            } catch (error) {
                throw error;
            }
        }
        // getCurrentUser
        async userLoginCheck() {
            try {
                return await this.account.get();
            } catch (error) {
                console.log("Appwrite service :: userLoginCheck :: error", error);
            }
            return null;
        }

        async logout() {
            try {
                await this.account.deleteSessions();
            } catch (error) {
                console.log("Appwrite service :: logout :: error", error);
            }
        }
}

const authService = new AuthService();

export default  authService;