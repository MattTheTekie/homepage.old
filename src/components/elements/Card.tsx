import { component$, Slot } from '@builder.io/qwik';
import { GithubIcon, GlobeIcon } from 'qwik-feather-icons';

export default component$(({ link, name, icon, github }: any) => {
  return (
    <div class="w-64 border-2 border-gray-700 bg-gray-800 rounded-xl p-8 grid gap-2">
      <img src={icon} alt={name} class="mb-4" draggable={false}/>
      <h2 class="text-lg font-bold">{name}</h2>
      <p class="text-gray-400 mb-2">
        <Slot />
      </p>
      {link && (
        <a href={link} class="transition duration-200 flex bg-luminescent-900/60 hover:bg-luminescent-900/80 text-white hover:drop-shadow-2xl px-4 py-3 rounded-lg text-md font-bold items-center gap-4">
          <GlobeIcon/>Visit page
        </a>
      )}
      {github && (
        <a href={github} class="transition duration-200 flex bg-luminescent-900/60 hover:bg-luminescent-900/80 text-white hover:drop-shadow-2xl px-4 py-3 rounded-lg text-md font-bold items-center gap-4">
          <GithubIcon/> Github
        </a>
      )}
    </div>
  );
});
