export default function checkAuthentication() {
    const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("session="))
    ?.split("=")[1];

    if (cookieValue) {
        return true
    } else {
        return false
    }
}