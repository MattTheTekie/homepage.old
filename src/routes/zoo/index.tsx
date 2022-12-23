import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    const now = new Date();
    const store = useStore({
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
        millisecond: now.getMilliseconds(),
        hour2: now.getHours() * 0.666666666,
        minute2: now.getMinutes() * 1.666666666,
        second2: now.getSeconds() * 1.666666666,
        millisecond2: now.getMilliseconds() * 14.4,
    });

    useClientEffect$(() => {
        const update = () => {
            store.millisecond += 10;
            store.millisecond2 += 16;
            if (store.millisecond >= 1000) { store.millisecond = 0; store.second += 1; }
            if (store.millisecond2 >= 1000) { store.millisecond2 = 0; store.second2 += 1; }
            if (store.second >= 60) { store.second = 0; store.minute += 1; }
            if (store.second2 >= 100) { store.second2 = 0; store.minute2 += 1; }
            if (store.minute >= 60) { store.minute = 0; store.hour += 1; }
            if (store.minute2 >= 100) { store.minute2 = 0; store.hour2 += 1; }
            if (store.hour >= 24) { store.hour = 0; }
            if (store.hour2 >= 15.9) { store.hour2 = 0; }
        };
        update();
        const tmrId = setInterval(update, 10);
        return () => clearInterval(tmrId);
    });

    return (
        <section class="mx-auto max-w-6xl px-6" style={{ minHeight: 'calc(100dvh - 64px)' }}>
            <h1 class="font-bold tracking-tight text-white text-5xl py-12">
                Zoo
            </h1>
            <h1 class="font-bold tracking-tight text-3xl pb-6">
                If time used multiples of 100 instead of 60
            </h1>
            <p class="w-full text-xl">
                {("0" + Math.round(store.hour)).slice(-2)}:{("0" + Math.round(store.minute)).slice(-2)}:{("0" + Math.round(store.second)).slice(-2)}:{Math.round(store.millisecond)}<br/>
                {("0" + Math.round(store.hour2)).slice(-2)}:{("0" + Math.round(store.minute2)).slice(-2)}:{("0" + Math.round(store.second2)).slice(-2)}:{Math.round(store.millisecond2)}
            </p>
        </section>
    );
});

export const head: DocumentHead = {
    title: 'Zoo',
    meta: [
        {
            name: 'description',
            content: 'This is where i test stuff idk'
        },
        {
            property: 'og:description',
            content: 'This is where i test stuff idk'
        },
        {
            name: 'og:image',
            content: 'https://avatars.githubusercontent.com/u/42164502'
        }
    ]
}