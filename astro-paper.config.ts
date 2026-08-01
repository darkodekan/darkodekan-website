import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://darkodekan.com/",
    title: "Darko Dekan",
    description: "My corner of the internet dedicated to pure mathematics, programming, and tutoring.",
    author: "Darko Dekan",
    profile: "https://darkodekan.com/",
    ogImage: "default-og.png",
    lang: "en",
    timezone: "Europe/Belgrade",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/darkodekan" },
    { name: "linkedin", url: "www.linkedin.com/in/darko-dekan-8211b3368" },
    { name: "mail",     url: "mailto:darkodekan@gmail.com" },
    { name: "whatsapp", url: "https://wa.me/?text=381621005941" },

  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});