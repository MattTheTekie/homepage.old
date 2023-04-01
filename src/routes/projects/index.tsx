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
        <Card name="Cactie" icon="https://cactie.luminescent.dev/assets/images/Cactie.webp" github="https://github.com/saboooor/Cactie" link="https://cactie.luminescent.dev/">
          A Discord bot that does stuff ig
          Admin, Fun, Tickets, Utilities, Animals, and Actions!
        </Card>
        <Card name="Shoto" icon="https://cdn.discordapp.com/avatars/796935151417688074/6202f5e5cc62481162ef0a98b364f702.webp?size=2048" github="https://github.com/LuminescentDev/Shoto" link="https://shoto.akiradev.xyz/">
          Another Discord bot that does stuff ig <br />
          Fun, Utilies, and more!
        </Card>
        <Card name="Botflop" icon="https://rgb.birdflop.com/assets/images/new_birdflop_logo_large.png" github="https://github.com/LuminescentDev/botflop">
          Discord Bot for server hosts, devs, and admins. Analyzes timings reports & uploads text files to a bin
        </Card>
        <Card name="Nether Depths" icon="https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png" link="https://netherdepths.com">
          Surpass the limits of the Nether.
          A Minecraft server with various features and custom generation and more
        </Card>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content: 'These are the projects we are working on!',
    },
    {
      name: 'og:description',
      content: 'These are the projects we are working on!',
    },
    {
      name: 'og:image',
      content: 'https://avatars.githubusercontent.com/u/86643576',
    },
  ],
};