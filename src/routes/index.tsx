import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div class="text-center sm:text-left justify-start">
        <div class="flex sm:hidden relative justify-center align-center sm:ml-auto mb-10" style="width: 100%;">
          <img class="rounded-full ease-in-out filter drop-shadow-2xl" src={`https://avatars.githubusercontent.com/u/42164502`} style={{ maxWidth: '40%' }} alt="sab's pfp" />
        </div>
        <h1 class="font-bold tracking-tight text-white text-5xl">
          smhsmh
        </h1>
        <p class="mt-5 text-2xl text-gray-400">
          Welcome to sab's hellhole
        </p>
      </div>
      <div class="hidden sm:flex relative justify-end align-center sm:ml-auto" style={{ maxWidth: '30%', filter: 'drop-shadow(0 5rem 10rem rgb(251 146 60 / 0.3))' }}>
        <img class="rounded-full ease-in-out filter drop-shadow-2xl" src={`https://avatars.githubusercontent.com/u/42164502`} alt="sab's pfp" />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'smhsmh',
  meta: [
    {
      name: 'description',
      content: 'Welcome to sab\'s hellhole'
    },
    {
      name: 'og:description',
      content: 'Welcome to sab\'s hellhole'
    },
    {
      name: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/42164502'
    }
  ]
}