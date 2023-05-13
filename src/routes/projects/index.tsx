import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import Card from '~/components/elements/Card';

export default component$(() => {
  return (
    <section class="flex flex-col gap-5 mx-auto max-w-6xl px-6 items-center justify-center py-16" style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <h1 class="font-bold text-white text-2xl sm:text-5xl">
        Our Projects
      </h1>
      <h1 class="text-xl sm:text-3xl pb-10">
        Come on, hover over any project below :)
      </h1>
      <div class="grid sm:grid-cols-3 gap-5">
        <Card name="Dragon TV" icon="https://www.simplymc.art/icon-192x192.png" github="https://github.com/MattTheTekie/MattTheTekie/tree/main/Personal-Scripts/DRAGON_TV" link="https://github.com/MattTheTekie/MattTheTekie/tree/main/Personal-Scripts/DRAGON_TV">
          Dragon TV is my web TV station around town. It's pretty epic.
        </Card>
        <Card name="Dragon Linux" icon="https://cactie.luminescent.dev/assets/images/Cactie.webp" github="https://github.com/MattTheTekie/MattTheTekie/tree/main/Personal-Scripts/Distromaking" link="https://freedom-hq.github.io/Dragon-Linux/">
          Dragon Linux, is a awesome Linux distro I made many years back.
        </Card>
        <Card name="Shoto" icon="https://cdn.discordapp.com/avatars/796935151417688074/6202f5e5cc62481162ef0a98b364f702.webp?size=2048" github="https://github.com/LuminescentDev/Shoto" link="https://shoto.akiradev.xyz/">
          Another Discord bot that does stuff ig <br />
          Fun, Utilies, and more!
        </Card>
      </div>
      <div class="grid sm:grid-cols-2 gap-5">
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
