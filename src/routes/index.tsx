import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

import { GithubIcon } from 'qwik-feather-icons';
import Logo from '~/components/elements/Logo';

export default component$(() => {
  return (
    <section class="mx-auto flex flex-col gap-10 justify-center items-center max-w-6xl" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="w-full px-[10%]">
        <div style="filter: drop-shadow(0 0 3rem #CB6CE6);">
          <Logo/>
        </div>
      </div>
      <p class="text-xl sm:text-3xl text-white">Welcome to our website idk</p>
      <Link href="https://github.com/LuminescentDev" class="flex justify-center sm:justify-start transition duration-200 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 px-6 py-3 font-bold text-gray-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-4 items-center">
        <GithubIcon/> Check out our GitHub profile
      </Link>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Welcome to our website idk',
    },
    {
      name: 'og:description',
      content: 'Welcome to our website idk',
    },
    {
      name: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/86643576',
    },
  ],
};