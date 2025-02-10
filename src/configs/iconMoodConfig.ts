import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faFaceDizzy} from "@fortawesome/free-solid-svg-icons";
import { green, orange, white } from "colors";

function iconMoodConfig(count: number): Object {
    if (count <= 1) return moodConfigGenerator(faFaceSmile, green);
    if (count > 1 && count < 5) return moodConfigGenerator(faFaceFrown, orange);
    return moodConfigGenerator(faFaceDizzy, white);
}

export default iconMoodConfig;

function moodConfigGenerator(icon: object, color: string): Object {
    return { icon, color}
}