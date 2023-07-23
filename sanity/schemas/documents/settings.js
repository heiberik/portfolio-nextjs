import { email } from "../parts/atomic/email";
import { seo } from "../parts/atomic/seo";

export const settings = {
    name: "settings",
    title: "Settings",
    type: "document",
    fields: [
        email(),
        seo
    ]
  }