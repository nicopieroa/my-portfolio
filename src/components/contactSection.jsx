import { useForm } from '@mantine/form';
import { Textarea, TextInput, Button } from '@mantine/core';

export function ContactSection() {
    const form = useForm({
        initialValues: { name: '', email: '', message: '' },

        validate: {
            name: (value) => (value.length < 1 ? 'Enter a name' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            message: (value) => (value.length < 1 ? 'Enter a message' : null),
        },
    });

    const handleSubmit = () => {
        form.reset()
    }

    return (
        <div className='px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <section id="contactSection" className='flex flex-col gap-y-16 p-8 md:p-16 lg:p-32 bg-[#202020] px-twoDotFivePercent text-white text-center rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                    Contactanos
                </h2>

                <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-y-8'>
                    <TextInput label="Name" placeholder="Laura" {...form.getInputProps('name')} withAsterisk className='m-0 w-full' />

                    <TextInput label="Email" placeholder="laura@email.com" {...form.getInputProps('email')} withAsterisk className='m-0 w-full' />

                    <Textarea label="Message" placeholder="Hi Nico..." {...form.getInputProps('message')} withAsterisk className='m-0 w-full' />

                    <Button size="xl" variant='filled' type='submit' className='bg-green-600 hover:bg-green-700 m-0'>
                        ENVIAR
                    </Button>
                </form>
            </section>
        </div>
    )
}