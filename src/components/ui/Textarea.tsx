import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  showCount?: boolean;
  maxCount?: number;
}

const Textarea = ({ label, error, showCount, maxCount, className = '', ...props }: TextareaProps) => {
  const currentLength = props.value?.toString().length || 0;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        className={`
          w-full rounded-md border border-gray-300 shadow-sm px-3 py-2
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      <div className="flex justify-between items-center mt-1">
        <div>
          {error && (
            <p className="text-sm text-red-500">
              <i className="fas fa-exclamation-circle mr-1"></i>
              {error}
            </p>
          )}
        </div>
        {showCount && maxCount && (
          <p className={`text-sm ${currentLength > maxCount ? 'text-red-500' : 'text-gray-500'}`}>
            {currentLength}/{maxCount}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
