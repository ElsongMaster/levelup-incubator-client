import http from "./http-common";
class UploadFilesService {
    upload(file, email, tokenReq, onUploadProgress) {
        console.log(tokenReq)
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
    getFiles( tokenReq) {

        return http.get("/api/v1/files", {
          headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + tokenReq
          }});
    }
}
export default new UploadFilesService();
