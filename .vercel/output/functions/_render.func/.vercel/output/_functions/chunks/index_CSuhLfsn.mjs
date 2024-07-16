/* empty css                         */
import { k as createComponent, l as renderTemplate, n as addAttribute, p as renderHead, q as renderSlot, o as createAstro, m as maybeRenderHead, t as renderComponent } from './astro/server_cKPxeRc_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/b1997/projects/astro/afraid-asteroid/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  let { props } = Astro2;
  let { title } = props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(title, "title")}> ${renderSlot($$result, $$slots["default"])} </button> `;
}, "C:/Users/b1997/projects/astro/afraid-asteroid/src/UW/Button/Button.astro", void 0);

function Card({
  name,
  title,
  init
}) {
  let [count, setCount] = useState(init);
  console.log("count: ", count);
  return jsxs("div", {
    children: [jsx("p", {
      children: count
    }), jsx("button", {
      onClick: () => setCount(count + 1),
      children: "Click"
    })]
  });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let res = await fetch("http://localhost:3000/server");
  let data = await res.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${JSON.stringify(data)} ${renderComponent($$result2, "Button", $$Button, { "title": "mj" }, { "default": ($$result3) => renderTemplate`Click Me` })} <p id="count"></p> <button id="btn">btn</button> ${renderComponent($$result2, "Card", Card, { "init": 8, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/preact/Card/index.tsx", "client:component-export": "default" })} </main> ` })} `;
}, "C:/Users/b1997/projects/astro/afraid-asteroid/src/pages/index.astro", void 0);

const $$file = "C:/Users/b1997/projects/astro/afraid-asteroid/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
