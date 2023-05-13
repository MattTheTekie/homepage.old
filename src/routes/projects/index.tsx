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
        <Card name="Dragon TV" icon="https://raw.githubusercontent.com/MattTheTekie/MattTheTekie/main/Personal-Scripts/Images/static.displate.com_800be04aa6f899076275e4dd96dbf9f4_46e904de13eaa602b904b8a5fa5e3e23.jpg" github="https://github.com/MattTheTekie/MattTheTekie/tree/main/Personal-Scripts/DRAGON_TV" link="https://github.com/MattTheTekie/MattTheTekie/tree/main/Personal-Scripts/DRAGON_TV">
          Dragon TV is my web TV station around town. It's pretty epic.
        </Card>
        <Card name="Dragon Linux" icon="https://dragon-linux.surge.sh/img/dragon.jpeg" github="https://github.com/MattTheTekie/MattTheTekie/tree/main/Personal-Scripts/Distromaking" link="https://freedom-hq.github.io/Dragon-Linux/">
          Dragon Linux, is a awesome Linux distro I made many years back.
        </Card>
        <Card name="HomeLab" icon="https://cdn.discordapp.com/avatars/796935151417688074/6202f5e5cc62481162ef0a98b364f702.webp?size=2048" github="https://github.com/MattTheTekie/HomeLab" link="https://tsukashomelab.netlify.app/">
          This is my current HomeLab management portal.<br />
        </Card>
      </div>
      <div class="grid sm:grid-cols-2 gap-5">
        <Card name="Freedom-HQ" icon="https://freedom-hq.github.io/FREEDOM-HQ/banner.png" github="https://freedom-hq.github.io/FREEDOM-HQ/">
          Freedom-HQ is my development group focusing on Linux, Android, and the DSiPaint archival process.
        </Card>
        <Card name="Personal Scripts" icon="https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png" link="https://github.com/MattTheTekie/MattTheTekie/tree/main/Personal-Scripts">
          You can check out my personal scripts over here.
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
