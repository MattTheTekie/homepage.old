import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <div class="justify-center align-center mx-auto">
        <img class="rounded-xl ease-in-out filter drop-shadow-2xl" src={`https://raw.githubusercontent.com/saboooor/fork-graph/main/img.png?v=5`} alt="fork graph" />
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