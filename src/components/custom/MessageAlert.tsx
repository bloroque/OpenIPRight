import React, { useEffect } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface MessageAlertProps {
    type?: "error" | "warning" | "success" | null;
    title?: string | null;
    text: string;
    className?: string | null;
    onClose?: () => void;
}

const MessageAlert: React.FC<MessageAlertProps> = ({ type, title, text, className, onClose }) => {
    useEffect(() => {
        if (onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [onClose]);

    let classCSS = "";
    switch (type) {
        case "error":
            classCSS = "text-red-600 border-red-600";
            break;
        case "warning":
            classCSS = "text-yellow-500 border-yellow-500";
            break;
        case "success":
            classCSS = "text-green-500 border-green-500";
            break;
        default:
            classCSS = "text-slate-700 border-slate-700";
            break;
    }

    return (
        <Alert className={`${classCSS} ${className}`}>
            {title && <AlertTitle>{title}</AlertTitle>}
            <AlertDescription>{text}</AlertDescription>
        </Alert>
    );
};

export default MessageAlert;