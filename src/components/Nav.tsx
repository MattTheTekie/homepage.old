import { component$, Slot } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';

import { LogoDiscord, LogoGithub, Menu, Code, GitBranchOutline } from 'qwik-ionicons';
import Logo from '~/components/elements/Logo';

export default component$(() => {
  return (
    <Nav>
      <MainNav>
        <NavButton href="/forks" extraClass="hidden xl:flex gap-3">
          <GitBranchOutline width="24" class="fill-current" />
          Commit History
        </NavButton>
        <NavButton href="/projects" extraClass="hidden xl:flex gap-4">
          <Code width="24" class="fill-current" />
          Projects
        </NavButton>
        <NavButton external icon href="https://github.com/MattTheTekie" title="GitHub" extraClass="hidden xl:flex">
          <LogoGithub width="24" class="fill-purple-200" />
        </NavButton>
        <NavButton icon href="/discord" title="Discord" extraClass="hidden xl:flex">
          <LogoDiscord width="24" class="fill-indigo-200" />
        </NavButton>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          const classList = document.getElementById('mobile-menu')?.classList;
          if (classList?.contains('hidden')) classList.replace('hidden', 'flex');
          else classList?.replace('flex', 'hidden');
        }} class="transition duration-200 ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl xl:hidden">
          <Menu width="24" class="fill-current"/>
        </button>
      </MainNav>
      <MobileNav>
        <NavButton mobile href="/forks" extraClass="flex xl:hidden gap-2">
          <GitBranchOutline width="24" class="fill-current" />
          Fork Graph
        </NavButton>
        <NavButton mobile href="/forks" extraClass="flex xl:hidden gap-2">
          <Code width="24" class="fill-current" />
          Projects
        </NavButton>
        <div class="flex flex-row">
          <NavButton external mobile icon href="https://github.com/MattTheTekie" title="GitHub" extraClass="flex xl:hidden">
            <LogoGithub width="24" class="fill-purple-200" />
          </NavButton>
          <NavButton mobile icon href="/discord" title="Discord" extraClass="flex xl:hidden">
            <LogoDiscord width="24" class="fill-indigo-200" />
          </NavButton>
        </div>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen py-2 bg-gray-900/70 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <Slot />
      </div>
    </nav>
  );
});

export const Brand = component$(() => {
  return (
    <div class="flex flex-1 items-center justify-start">
      <Link href="/" class="transition duration-200 ease-in-out text-gray-300 hover:bg-gray-800 hover:text-white drop-shadow-2xl px-3 pt-3 pb-2 rounded-lg text-lg flex items-center whitespace-nowrap">
        <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32">
          <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
            <Logo/>
          </div>
        </div>
      </Link>
    </div>
  );
});

export const MainNav = component$(() => {
  return (
    <div class="relative flex h-16 items-center justify-between">
      <Brand/>
      <div class="flex flex-1 items-center justify-end">
        <div class="flex gap-2 text-gray-300 whitespace-nowrap">
          <Slot/>
        </div>
      </div>
    </div>
  );
});

export const MobileNav = component$(() => {
  return (
    <div id="mobile-menu" class="gap-4 py-4 px-3 bg-black rounded-lg mt-2 hidden flex-col xl:hidden">
      <Slot />
    </div>
  );
});

export const NavButton = component$(({ href, title, icon, external, extraClass }: any) => {
  const nav = useNavigate();
  return <>
    {external &&
      <a href={href} title={title} class={`group transition duration-200 ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg ${icon ? 'text-3xl' : ''} items-center`}>
        <Slot />
      </a>
    }
    {!external &&
      <button onClick$={() => { document.getElementById('mobile-menu')?.classList.replace('flex', 'hidden'); nav(href); }} title={title} class={`group transition duration-200 ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg ${icon ? 'text-3xl' : ''} items-center`}>
        <Slot />
      </button>
    }
  </>;
});
