import { FC, useEffect, useRef, useState } from 'react';
import './Select.scss';
import { FaCaretDown } from 'react-icons/fa';

interface SelectProps {
  id: string;
  label?: string;
  options?: any[];
  selectedOption?: string | number;
  setSelectedOption: (option: string) => void;
  errors?: any;
  required?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  keyPropertyName?: string;
  placeholder?: string;
  className: string;
}

const Select: FC<SelectProps> = ({
  id,
  options,
  selectedOption,
  setSelectedOption,
  className,
  keyPropertyName,
  placeholder,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div id={id} className='custom-select my-2' ref={popupRef}>
      <button
        type='button'
        className={`${className} !flex justify-between items-center cursor-pointer `}
        onClick={toggleDropdown}
        disabled={disabled}
      >
        {selectedOption ? (
          <span className='text-Grey1'> {selectedOption}</span>
        ) : (
          <span className='text-Grey5'> {placeholder}</span>
        )}
        <FaCaretDown />
      </button>
      {isOpen && (
        <ul className='options'>
          {options?.map((option) => (
            <li
              key={option[keyPropertyName as string] || option}
              className='option flex items-center gap-3'
              onClick={() =>
                handleOptionClick(option[keyPropertyName as string] || option)
              }
            >
              {option[keyPropertyName as string] || option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
