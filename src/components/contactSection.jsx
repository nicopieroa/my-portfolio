import emailjs from '@emailjs/browser';

import { useForm } from '@mantine/form';
import { Textarea, TextInput, Button } from '@mantine/core';

import { AlertComponent } from './alert';
import { LoaderComponent } from './loader';

import { useRef, useState } from 'react';

export function ContactSection() {
    const formRef = useRef()

    const [statusFormSend, setStatusFormSend] = useState(null)
    const [loader, setLoader] = useState(false)

    const form = useForm({
        initialValues: { name: '', email: '', message: '' },

        validate: {
            name: (value) => (value.length < 1 ? 'Enter a name' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            message: (value) => (value.length < 1 ? 'Enter a message' : null),
        },
    });

    const emailServices = () => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICERID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
        const apikey = import.meta.env.VITE_EMAILJS_APIKEY;

        emailjs.sendForm(serviceId, templateId, formRef.current, apikey)
            .then((result) => {
                if (result.text) setStatusFormSend(result.text)
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleSubmit = () => {
        emailServices()
        setLoader(true)
        form.reset()

        if (statusFormSend !== null)
            setLoader(false)
    }

    return (
        <div className='px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <section id="contactSection" className='flex flex-col gap-y-16 p-8 md:p-16 lg:p-32 bg-[#202020] px-twoDotFivePercent text-white text-center rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                    Contactanos
                </h2>

                <form ref={formRef} onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-y-8'>
                    <TextInput label="Name" placeholder="Laura" {...form.getInputProps('name')} withAsterisk className='m-0 w-full' name='from_name' />

                    <TextInput label="Email" placeholder="laura@email.com" {...form.getInputProps('email')} withAsterisk className='m-0 w-full' name='from_email' />

                    <Textarea label="Message" placeholder="Hi Nico..." {...form.getInputProps('message')} withAsterisk className='m-0 w-full' name='message' />

                    <Button size="xl" variant='filled' type='submit' className='bg-green-600 hover:bg-green-700 m-0'>
                        ENVIAR
                    </Button>

                    {statusFormSend === null && loader === false ? null :
                        statusFormSend === null && loader ? <LoaderComponent /> :
                            statusFormSend !== null ? <AlertComponent statusFormSend={statusFormSend} /> :
                                null}


                </form>
            </section>
        </div>
    )
}