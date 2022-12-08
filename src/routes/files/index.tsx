import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import fs from 'fs';

export default component$(() => {
  const files = fs.readdirSync('./files');
  return (
    <section class="mx-auto max-w-6xl px-6" style={{ minHeight: 'calc(100dvh - 64px)' }}>
        <h1 class="font-bold tracking-tight text-white text-5xl py-12">
            Files
        </h1>
        <div class="w-full bg-gray-800 rounded-xl">
            {
                files.map((file) => {
                    return (
                        <>
                            <hr class="border-gray-900"/>
                            <a href={`/file/${file}`}>
                                <div class="w-full flex items-center text-xl p-3 hover:bg-gray-700 rounded-xl">
                                    {file}
                                </div>
                            </a>
                        </>
                    )
                })
            }
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