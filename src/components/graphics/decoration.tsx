export const CircleDecoration = ({ className, strokeWidth }: { className?: string, strokeWidth?: number }) => {
    return (
        <svg className={className} strokeWidth={strokeWidth ?? 1} width="127" stroke="currentColor" height="41" viewBox="0 0 127 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65.2357 0.595703C30.613 0.595703 1.04297 9.8268 1.04297 20.7362C1.04297 31.6455 29.1102 40.4893 63.7329 40.4893C98.3556 40.4893 126.423 31.6455 126.423 20.7362C126.423 10.0305 99.4091 2.12249 65.6804 1.80074" />
        </svg>
    )
}