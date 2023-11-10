export default function Logo({ className, strokeWidth }: { className?: string, strokeWidth?: number }) {
    return (
        <svg className={className} strokeWidth={strokeWidth ?? 1} width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.75 0V53.5M10.5 48L44.5 14M37 48L3 14M0 34.75H47" stroke="currentColor" />
        </svg>
    )
}