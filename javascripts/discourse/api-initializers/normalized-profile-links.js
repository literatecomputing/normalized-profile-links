import { apiInitializer } from "discourse/lib/api";
import NormalizedProfileLinks from "../components/normalized-profile-links";

export default apiInitializer("1.8.0", (api) => {
  // console.log("hello world from api initializer!");
  api.renderInOutlet("user-post-names", NormalizedProfileLinks);
  api.renderInOutlet("user-card-post-names", NormalizedProfileLinks);
});
