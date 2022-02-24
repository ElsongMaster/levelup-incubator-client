import http from "./http-common";
class TutorialDataService {
    getAll(tokenReq) {
        return http.get("/api/v1/tasks", {
            headers: {
                Authorization: "Bearer " + tokenReq,
            },
        });
    }
    get(id, tokenReq) {
        return http.get(`api/v1/task/${id}`, {
            headers: {
                Authorization: "Bearer " + tokenReq,
            },
        });
    }
    create(data) {
        return http.post("api/v1/upload", data);
    }
    update(tokenReq, data) {
        return http.put("api/v1/task/status", data, {
            headers: {
                Authorization: "Bearer " + tokenReq,
            },
        });
    }
    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }
    deleteAll() {
        return http.delete(`/tutorials`);
    }
    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}
export default new TutorialDataService();
