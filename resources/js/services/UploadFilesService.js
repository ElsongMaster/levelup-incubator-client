import http from "./http-common";
class UploadFilesService {
    upload(file, email, tokenReq, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);
        formData.append("email", email);
        return http.post("/api/v1/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + tokenReq,
            },
            onUploadProgress,
        });
    }
    getFiles() {
        return http.get("/api/v1/files");
    }
}
export default new UploadFilesService();
