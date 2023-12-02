export default function Description({ value = "", error }: { value?: string, error?: any }) {
    return (
        <>
            {error ? error.map((row: string | any) => (
                <>
                    <span className="text-xs leading-none text-red-500">{row}</span>
                    <br />
                </>
            )) : (<span className="text-xs leading-none text-neutral-500">{value}</span>)}
        </>
    )
}