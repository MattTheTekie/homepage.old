import { component$, Slot } from '@builder.io/qwik';
import { LogoGithub, GlobeOutline } from 'qwik-ionicons';

export default component$(({ link, name, icon, github }: any) => {
  return (
    <div class="relative w-64 bg-gray-800 rounded-xl grid gap-2 group hover:-translate-y-4 hover:scale-105 transition-all duration-300">
      <div class="grid absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-300">
        {link && (
          <a href={link} class="flex flex-col justify-center transition duration-200 hover:bg-luminescent-900/20 text-white rounded-xl font-bold items-center gap-4">
            <GlobeOutline width="24" class="fill-current" />
            Visit page
          </a>
        )}
        {github && (
          <a href={github} class="flex flex-col justify-center transition duration-200 hover:bg-luminescent-900/20 text-white rounded-xl font-bold items-center gap-4">
            <LogoGithub width="24" class="fill-current" />
            Github
          </a>
        )}
      </div>
      <div class="p-8">
        <img src={icon} alt={name} class="mb-4" draggable={false}/>
        <h2 class="text-lg font-bold">{name}</h2>
        <p class="text-gray-400 mb-2">
          <Slot />
        </p>
      </div>
    </div>
  );
});