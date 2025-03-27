import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("team", "routes/team.tsx"),
  route("register", "routes/register.tsx"),
  route("faq", "routes/faq.tsx"),
] satisfies RouteConfig;
