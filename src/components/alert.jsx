import { Alert } from "@mantine/core";

export function AlertComponent({ statusFormSend }) {
    return (
        <Alert className={`${statusFormSend === 'OK' ? 'bg-green-700' : 'bg-red-500'} `}>
            <p className='text-white'>
                {statusFormSend === 'OK' ?
                    'Email sended succesfully.' :
                    'There was an error while trying to send your email. Try again, if the error persists, try to contact me via another means such as WhatsApp, Instagram, Linkedin, or X. Apologies, and thank you very much.'}
            </p>
        </Alert>
    )
}