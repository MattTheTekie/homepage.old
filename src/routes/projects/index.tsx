import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import Card from '~/components/elements/Card';

export default component$(() => {
  return (
    <section class="flex flex-col gap-10 mx-auto max-w-6xl px-6 items-center justify-center" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <h1 class="font-bold text-white text-2xl sm:text-5xl">
        Our Projects
      </h1>
      <div class="flex flex-wrap gap-6 justify-center">
        <Card name="SimplyMC" icon="https://www.simplymc.art/icon-192x192.png" github="https://github.com/LuminescentDev/SimplyMC" link="https://simplymc.art">
          A Minecraft Multitool for server owners, developers, and players.
        </Card>
        <Card name="Botflop" icon="https://rgb.birdflop.com/assets/images/new_birdflop_logo_large.png" github="https://github.com/LuminescentDev/botflop">
          Discord Bot for server hosts, devs, and admins. Analyzes timings reports & uploads text files to a bin
        </Card>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Luminescent Development',
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