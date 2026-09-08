type InputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

export default function InputField({
  label,
  type = "text",
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-blue-400">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-blue-500/20 bg-[#1d1d1d] px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
      />
    </div>
  );
}