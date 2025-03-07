import { axiosClient } from "src/config/axios";

const UserService = {
    async isEmailExists(email: string) {
        return axiosClient.post(`/users/check-mail`, email);
    }
}

export default UserService;