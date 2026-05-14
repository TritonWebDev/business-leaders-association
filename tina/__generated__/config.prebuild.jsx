// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  client: {
    skip: true
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        match: {
          include: "home"
        },
        fields: [
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Href", required: true }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "about",
            label: "About",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "membership",
            label: "Membership",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "object",
                name: "options",
                label: "Options",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title", required: true },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "object",
                name: "items",
                label: "Questions",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question", required: true },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "board",
            label: "Board",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "object",
                name: "members",
                label: "Members",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Name", required: true },
                  { type: "string", name: "role", label: "Role" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "gallery",
            label: "Gallery",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "object",
                name: "images",
                label: "Images",
                list: true,
                fields: [
                  { type: "image", name: "src", label: "Image" },
                  { type: "string", name: "alt", label: "Alt Text" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "socials",
            label: "Socials",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "object",
                name: "links",
                label: "Links",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label", required: true },
                  { type: "string", name: "href", label: "Href", required: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
