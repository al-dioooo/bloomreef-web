export default function Input({ onChange, value, id, type, error, disabled = false, min, max, maxLength, placeholder = "", accept }: { onChange: () => void, value?: string | number | any, id: string, type?: string, error?: boolean, disabled?: boolean, min?: number, max?: number, maxLength?: number, placeholder?: string, accept?: string }) {
    return (
        <input placeholder={placeholder} min={min} max={max} maxLength={maxLength} disabled={disabled} onChange={onChange} value={value} id={id} autoComplete="off" type={type ?? "text"} accept={accept} className={`${error ? 'bg-red-50' : ''} ${disabled ? 'opacity-60' : ''} w-min border-b-2 focus:outline-none overflow-visible focus:border-red-200`} />
    )
}