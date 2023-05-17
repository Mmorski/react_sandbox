import axios from "axios";

export default class PostService {
    static async getAllPosts() {
        const response = await axios.get("https://localhost:44343/posts");
        return response.data;
    }
}
