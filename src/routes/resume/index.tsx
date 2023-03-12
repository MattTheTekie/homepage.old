import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="sm:flex mx-auto max-w-6xl px-6 py-12" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div class="justify-start">
        <h1 class="font-bold text-white text-5xl">
          Muhammad Saboor, Bilal
        </h1>
        <p class="mt-5 text-3xl text-gray-200">
          (Saboor)
        </p>
        <p class="mt-5 text-xl text-gray-400">
          Culinary student at NAIT with a passion for cooking various foods and working in fast paced environments and self-taught full-stack software developer with an equal passion for technology.
        </p>
        <h1 class="mt-10 font-bold text-white text-2xl">
          EXPERIENCE
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Website Developer</span> — <Link href="https://burgersonfleek.ca">burgersonfleek.ca</Link><br/>
          Nov 2020 - Present<br/>
          Single-handedly created the website with Qwik and TailwindCSS and deployed to Cloudflare Pages
        </p>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Culinary Arts</span> — Harry Ainlay HS<br/>
          Sept 2019 - Jan 2020 / Sept 2021 - Jan 2022<br/>
          Prepared & cooked lunch for 1k+ students in various manners such as baking, meat cutting/cooking, soups/stocks, breakfast, garde manger, entrementier, etc.
        </p>
        <h1 class="mt-10 font-bold text-white text-2xl">
          EDUCATION
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Harry Ainlay High School</span> — High School Diploma<br/>
          Sept 2019 - Jun 2022
        </p>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Culinary Arts</span> — Harry Ainlay HS<br/>
          Sept 2019 - Jan 2020 / Sept 2021 - Jan 2022
        </p>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Culinary Arts</span> — NAIT<br/>
          Jan 2023 - Present
        </p>
      </div>
      <div class="justify-end">
        <h1 class="mt-10 sm:mt-0 font-bold text-white text-2xl">
          SKILLS
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          Exceptional communication.
        </p>
        <p class="text-lg text-gray-400">
          Effective and efficient problem solving.
        </p>
        <p class="text-lg text-gray-400">
          Proficient short term memory.
        </p>
        <h1 class="mt-10 font-bold text-white text-2xl">
          CERTIFICATIONS
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">
            NAIT Food Safety Certificate
          </span><br/>
          Mar 2, 2023
        </p>
        <h1 class="mt-10 font-bold text-white text-2xl">
          LANGUAGES
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          English, Urdu / Hindi
        </p>
        <h1 class="mt-10 font-bold text-white text-2xl">
          CODE LANGUAGES & FRAMEWORKS
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          JavaScript, TypeScript, NodeJS, Qwik, HTML, CSS, ExpressJS, EJS.
        </p>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Resume',
  meta: [
      {
          name: 'description',
          content: 'This is my resume, you can find all my experience here'
      },
      {
          property: 'og:description',
          content: 'This is my resume, you can find all my experience here'
      },
      {
        name: 'og:image',
        content: 'https://avatars.githubusercontent.com/u/42164502'
      }
  ]
}