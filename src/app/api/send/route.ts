import {EmailTemplate} from '@/components/emailTemplate';
import {Resend} from 'resend';
import React from 'react';

const resend = new Resend("re_Ruwka7Q1_4BKcrzFkEfCTsGzxRe7GXfqv");

export async function POST() {
    try {
        const {data, error} = await resend.emails.send({
            from: 'Acme <sonxsite@resend.dev>',
            to: ['merzlyy.pes@yandex.ru'],
            subject: "Hello world",
            react: EmailTemplate({firstName: "John"}) as React.ReactElement,
        });

        if (error) {
            return Response.json({error});
        }
        return Response.json({data});
    } catch (error) {
        return Response.json({error});
    }
}