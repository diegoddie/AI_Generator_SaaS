import Image from "next/image"

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="animate-spin w-10 h-10 relative">
                <Image
                    alt="Logo"
                    src="/logo.png"
                    fill
                />
            </div>
            <p className="text-sm text-muted-foreground">
                The Wizard is thinking..
            </p>
        </div>
    )
}