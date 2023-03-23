import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

import { FileTextIcon, GithubIcon } from "qwik-feather-icons";

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div class="text-left justify-start space-y-5 sm:max-w-[50%]">
        <div class="flex sm:hidden relative justify-start sm:ml-auto mb-5" style="width: 100%;">
          <img class="rounded-2xl ease-in-out filter drop-shadow-2xl" src={`https://avatars.githubusercontent.com/u/86643576`} style={{ maxWidth: '50%' }} alt="LuminescentDev" />
        </div>
        <h1 class="font-bold text-white text-2xl sm:text-5xl">
          Luminescent Development
        </h1>
        <div class="grid sm:flex gap-3 pt-4">
          <Link href="https://github.com/LuminescentDev" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 px-6 py-3 font-bold text-gray-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-4 items-center">
            <GithubIcon/> Check out our GitHub profile
          </Link>
        </div>
      </div>
      <div class="hidden sm:flex relative justify-end sm:ml-auto" style={{ maxWidth: '30%', filter: 'drop-shadow(0 5rem 10rem rgb(88 28 135 / 0.7))' }}>
        <img class="rounded-2xl ease-in-out filter drop-shadow-2xl" src={`https://avatars.githubusercontent.com/u/86643576`} alt="LuminescentDev" />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Luminescent Development',
  meta: [
    {
      name: 'description',
      content: 'Welcome to our website idk'
    },
    {
      name: 'og:description',
      content: 'Welcome to our website idk'
    },
    {
      name: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/86643576'
    }
  ]
}