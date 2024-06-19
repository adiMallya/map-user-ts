import { User } from "./User";
import { Company } from "./Company";
import { MyMap } from "./MyMap";

const user = new User();
const company = new Company();
const map = new MyMap("map");

map.addMarker(user);
map.addMarker(company);
