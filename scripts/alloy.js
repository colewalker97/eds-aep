import { createInstance } from "https://cdn1.adoberesources.net/alloy/2.19.1/alloy.min.js";

const titanium = createInstance({ name: "titanium" });
const copper = createInstance({ name: "copper" });

titanium("configure", {
  datastreamId: "b68d0ba1-084b-4827-aaad-d34f192e552c",
  orgId: "FFCD7E1464AD1F2F0A495FB7@AdobeOrg",
  debugEnabled: true,
});

titanium("sendEvent", {
  data: {
    key: "value",
  },
});

copper("configure", {
  datastreamId: "dcc2912d-24b2-498d-85f4-f275d8d99969",
  orgId: "89897F595D832D240A495FE6@AdobeOrg",
  debugEnabled: true,
});

copper("sendEvent", {
  data: {
    key: "value",
  },
});
