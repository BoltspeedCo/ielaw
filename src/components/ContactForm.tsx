'use client'
import * as React from 'react'
import { useFormspark } from "@formspark/use-formspark";
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/Form';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';
import { Link } from 'lucide-react';
import { Textarea } from './ui/Textarea';
import { kebabCase } from 'change-case';
type Props = {

}
const FORMSPARK_FORM_ID = "H7AMrmTH";
const services = [
    'corporate',
    'personal',
    'entertainment',
    'visa cancellation',
    'character & health',
    'appeals & tribunal',
    'pic, schedule 3 & waivers',
    'complex matters',
    'citizenship'
]
const formSchema = z.object({
    name: z.string().min(2, { message: "Please enter a valid name" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    services: z.string().min(2, { message: "Please enter a valid service" }),
    message: z.string().min(10, { message: "Please enter a valid message" }),
})
const ContactForm = ({ }: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const { formState, handleSubmit, reset } = form
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });
    const onSubmitHandler = handleSubmit(async (data) => {
        await submit(data)
        reset()

    })
    return (
        <>
            <Form {...form}>
                <form onSubmit={onSubmitHandler} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='sr-only'>Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field} disabled={submitting} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='sr-only'>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder="Email Address" {...field} disabled={submitting} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='sr-only'>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Phone" {...field} disabled={submitting} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="services"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='pl-2.5 text-muted-foreground'>Services</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={submitting}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select service" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {services.map((service, index) => {
                                            return (
                                                <SelectItem value={kebabCase(service)} key={index}>{service}</SelectItem>
                                            )
                                        })}

                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='sr-only'>Services</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Your message" {...field} disabled={submitting} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={'fill'} type="submit" disabled={submitting}>Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default ContactForm