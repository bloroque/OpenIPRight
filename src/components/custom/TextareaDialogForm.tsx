import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from '@/components/ui/dialog';
// import { Content } from "@tiptap/react";
import { MinimalTiptapEditor } from '@/components/minimal-tiptap';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';


interface TextareaDialogFormProps
{
    isOpen: boolean,
    title: string | null,
    content: string | null,
    getContent: (contentEdit: string | null) => void,
    openHandler: (value: boolean) => void, 
}

const TextareaDialogForm: React.FC<TextareaDialogFormProps> = ({ 
    isOpen  = false,
    title,
    content = null,
    getContent,
    openHandler
}) => {
    const [value, setValue] = useState(content);

    useEffect(() => {
        // Only update the value when the dialog opens
        if (isOpen) {
            setValue(content);
        }
    }, [isOpen, content]);

    const handleSave = () => {
        getContent(value);
        openHandler(false);
    };

    const handleClose = () => {
        openHandler(false);
        // Reset the value when closing without saving
        setValue(content);
    };

    return (
        <TooltipProvider>
            <Dialog open={isOpen}>
                <DialogContent className="lg:max-w-2xl flex flex-col gap-y-1 h-auto">
                    <DialogHeader className="grid gap-y-1" style={{ height: '40px' }}>
                        <DialogTitle className="px-2">
                            Editer : {title}
                        </DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div className="w-full">
                        <MinimalTiptapEditor
                            value={value}
                            onChange={setValue}
                            throttleDelay={1000}
                            className="w-full"
                            editorContentClassName="p-5"
                            output="html"
                            placeholder="Tapez votre description ici..."
                            autofocus={true}
                            immediatelyRender={true}
                            editable={true}
                            injectCSS={true}
                            editorClassName="focus:outline-none"
                        />
                        <div className="flex justify-end py-2 gap-2">
                            <div className="grow"></div>
                            <div className="flex gap-2">
                                <Button
                                    type="button"
                                    className="w-full h-8 shadow-none min-w-28 bg-slate-300 hover:bg-slate-200"
                                    variant={"secondary"}
                                    onClick={handleClose}
                                >
                                    Annuler
                                </Button>
                                <Button
                                    type="button"
                                    className="w-full h-8 shadow-none min-w-28 bg-blue-500 hover:bg-blue-400 text-white"
                                    onClick={handleSave}
                                >
                                    Terminer
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </TooltipProvider>
    );
};

export default TextareaDialogForm;