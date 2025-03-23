import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Icon from "@/components/custom/LucideIcon";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader, LogIn } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import MessageAlert from "@/components/custom/MessageAlert";

const formSchema = z.object({
    identifier: z.string({ required_error: "L'identifiant est requis." }).trim().min(1, { message: "Le champs ne doit pas être vide." }),
    password: z.string({ required_error: "Le mot de passe est requis." }).trim().min(1, { message: "Le champs ne doit pas être vide." }),
    terms: z.boolean().refine((val) => val === true, "Vous devez accepter les termes et conditions."),
});

const SignIn: React.FC = () => {

    const [loadingForm, setLoadingForm] = useState(false);
    const [messageError, setMessageError] = useState<{ type: "error" | "warning" ; title: string | null; text: string } | null>(null);

    const handleCloseMessageError = () => {
        setMessageError(null);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            identifier: '',
            password: '',
            terms: false,
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        console.log("", data)
    }

    return (
        <div className="flex flex-col w-full h-full md:flex-row">
            <div className=" p-5 md:flex md:flex-1">
                <div className="w-full h-full rounded-lg">
                    <div className="flex items-center justify-center w-full h-full">
                        <img className="h-full rounded-lg" title="SignIn page" src="https://ui.shadcn.com/placeholder.svg" />
                    </div>
                </div>
            </div>

            <ScrollArea id="div-ScrollArea" className="flex flex-col h-full p-5 md:flex-1 md:px-10 md:pl-5">
                <div className="flex items-center justify-center w-full h-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col max-w-sm px-2 py-5 sm:gap-y-2 md:gap-y-2 lg:gap-y-8 sm:pt-5 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                            <div className="flex flex-col gap-y-2 sm:mb-2 md:mb-2">
                                <h1 className="flex items-center content-center space-x-4 text-2xl font-bold tracking-tight">
                                    <Icon name="LogIn" size={30} />
                                    <span>Login Now</span>
                                </h1>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                    The Zero Gravity Pen can be used to write in any orientation, including upside-down.
                                </p>
                            </div>

                            <div className="grid py-2 gap-y-2 md:gap-y-4">
                                <FormField
                                    control={form.control}
                                    name="identifier"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Votre identifiant ou Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="px-4"
                                                    id="identifier" 
                                                    type="text"
                                                    placeholder="eg:"
                                                    {...field} 
                                                    disabled={loadingForm}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mot de passe</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    id="password" 
                                                    type="password"
                                                    placeholder="#############" 
                                                    {...field} 
                                                    disabled={loadingForm} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="terms"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="flex space-x-2 items-top">
                                                    <Checkbox
                                                        id="terms"
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        disabled={loadingForm}
                                                        className="mt-1"
                                                        />
                                                    <label htmlFor="terms" className="text-sm font-medium text-slate-700 dark:text-slate-400 cursor-pointer pt-[1px]">
                                                        Accept terms and conditions:
                                                        <span className="text-sm text-muted-foreground font-extralight">&nbsp;You agree to our Terms of Service and Privacy Policy.</span>
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid gap-y-2 md:py-3">
                                    
                                    <Button disabled={loadingForm} type="submit" className="w-full text-white rounded h-9 hover:bg-blue-500">
                                        { loadingForm ? (
                                            <Loader className="mr-2 animate-spin" />
                                        ) : (
                                            <LogIn className="mr-2" />
                                        )}
                                        <span>Sign In</span>
                                    </Button>

                                    <div className="grid py-2">
                                        <span className="bg-gray-300 h-[1px]"></span>
                                    </div>

                                    <Button disabled={loadingForm} type="button" className="bg-slate-100 hover:bg-slate-200">
                                        Forgot your password?
                                    </Button>
                                </div>

                                <div className="grid gap-y-2 md:pt-1">

                                    {messageError && (
                                        <MessageAlert
                                            type={messageError.type}
                                            title={messageError.title}
                                            text={messageError.text}
                                            onClose={handleCloseMessageError}
                                        />
                                    )}

                                </div>

                            </div>
                        </form>
                    </Form>
                </div>
            </ScrollArea>
        </div>
    );

}

export default SignIn;