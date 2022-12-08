import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="sm:flex mx-auto max-w-6xl px-6 py-12" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div class="justify-start">
        <h1 class="font-bold tracking-tight text-white text-5xl">
          Muhammad Saboor, Bilal
        </h1>
        <p class="mt-5 text-3xl text-gray-200">
          (Saboor)
        </p>
        <p class="mt-5 text-xl text-gray-400">
          Culinary student with a passion for cooking various foods and working in fast paced environments and self-taught full-stack software developer with an equal passion for technology.
        </p>
        <h1 class="mt-10 font-bold tracking-tight text-white text-2xl">
          EXPERIENCE
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Website Developer</span> — <a href="https://burgersonfleek.ca">burgersonfleek.ca</a><br/>
          Nov 2020 - Present
        </p>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Culinary Arts Yr 2</span> — Harry Ainlay HS<br/>
          Sept 2021 - Jan 2022
        </p>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Culinary Arts Yr 1</span> — Harry Ainlay HS<br/>
          Sept 2019 - Jan 2020
        </p>
        <h1 class="mt-10 font-bold tracking-tight text-white text-2xl">
          EDUCATION
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">Harry Ainlay High School</span> — High School Diploma<br/>
          Sept 2019 - Jun 2022
        </p>
      </div>
      <div class="justify-end">
        <h1 class="mt-10 sm:mt-0 font-bold tracking-tight text-white text-2xl">
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
        <h1 class="mt-10 font-bold tracking-tight text-white text-2xl">
          CERTIFICATIONS
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          <span class="font-bold">
            Food Sanitation and Hygiene Certificate of Achievement
          </span><br/>
          November 26, 2019
        </p>
        <h1 class="mt-10 font-bold tracking-tight text-white text-2xl">
          LANGUAGES
        </h1>
        <p class="mt-5 text-lg text-gray-400">
          English, Urdu
        </p>
        <h1 class="mt-10 font-bold tracking-tight text-white text-2xl">
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
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'smhsmh.club'
    }
  ]
}