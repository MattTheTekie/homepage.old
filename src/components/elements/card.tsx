import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { GithubIcon, GlobeIcon } from "qwik-feather-icons";

export default component$(({ link, name, icon, github }: any) => {
  return (
    <div class="w-64 border border-gray-500 rounded rounded-lg p-4 m-2">
      <div class="p-5">
        <div class="text-center mb-30">
          <img src={icon} alt={name} class="mb-4" draggable={false}/>
          <div class="pr-5">
            <h2 class="text-lg font-semibold">{name}</h2>
            <p class="text-gray-400">
              <Slot />
            </p>
          </div>
        </div>
        <div>
          {link && (
            <Link href={link} class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
              <GlobeIcon/>Visit page
            </Link>
          )}
          {github && (
            <Link href={github} class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <GithubIcon/> Github
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});
