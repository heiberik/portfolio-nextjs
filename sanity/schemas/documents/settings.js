import { email } from "../parts/atomic/email";
import { seo } from "../parts/seo";

export const settings = {
    name: "settings",
    title: "Settings",
    type: "document",
    fields: [
        email({}),
        seo({})
    ]
  }