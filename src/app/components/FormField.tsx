'use client'

interface FormFieldProps {
  label: string
  type?: 'text' | 'email' | 'textarea'
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
}

export default function FormField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      )}
    </div>
  )
}
