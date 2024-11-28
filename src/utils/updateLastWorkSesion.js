import getDate from "utils/getDate";

function updateLastWorkSession() {
    localStorage.setItem("lastWorkDate", getDate());
}

export default updateLastWorkSession;