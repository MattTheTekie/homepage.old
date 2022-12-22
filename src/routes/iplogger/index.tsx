import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler<any> = async ({ request }) => {
    // log ip
    const ip = request.headers.get('x-forwarded-for');
    console.log(ip);
};