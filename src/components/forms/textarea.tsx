export default function Textarea({ onChange, value, id, error, disabled = false, maxLength, placeholder = "" }: { onChange: (param: any) => void, value?: string | number | any, id: string, error?: boolean, disabled?: boolean, min?: number, max?: number, maxLength?: number, placeholder?: string }) {
    return (
        <textarea placeholder={placeholder} maxLength={maxLength} disabled={disabled} onChange={onChange} value={value} id={id} autoComplete="off" className={`${error ? 'placeholder:text-red-300' : ''} ${disabled ? 'opacity-60' : ''} w-full border-b-2 focus:outline-none overflow-visible focus:border-red-200 py-2`}></textarea>
    )
}