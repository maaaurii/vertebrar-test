import { HeaderLogin } from "@/components/headerlogin/headerLogin";

export default function LoginLayout ({children}) {
    return (
        <>
        <HeaderLogin />
            {children}
        </>
    );
}