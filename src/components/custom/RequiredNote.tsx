import React from "react";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from "lucide-react";

interface RequireNoteProps {
    message: React.ReactNode; // Le type React.ReactNode permet d'inclure des éléments JSX
}

const RequireNote: React.FC<RequireNoteProps> = ({ message }) => {
    return (
        <Alert className="px-2 pb-1 py-2 [&>svg]:absolute  [&>svg~*]:pl-5 [&>svg]:left-2 [&>svg]:top-2.5 [&>svg+div]:translate-y-0 rounded bg-slate-100 border-0">
            <Info className="h-4 w-4" />
            <AlertDescription className="[&_p]:leading-normal">
                <span className="font-semibold">Remarque : </span>
                <span className="text-sm italic">{message}</span>
            </AlertDescription>
        </Alert>
    );
}

export default RequireNote;
