import { FC } from 'react';

interface IChecked {
  //   id: string | number;
  //   isChecked: { [key: string]: boolean };
  checked: boolean;
  title: string;
  onClick: () => void;
}

const CheckboxText: FC<IChecked> = ({ checked, title, onClick }) => {
  return (
    <div
      className={`${
        checked ? 'bg-pryColor-100 border-pryColor' : 'border-Grey5'
      } rounded-lg border-[1.5px] w-full p-4 cursor-pointer relative grid place-items-center min-h-[75px]`}
      onClick={onClick}
    >
      <div className='flex justify-end absolute top-2 right-3'>
        <input
          id=''
          type='radio'
          onChange={onClick}
          checked={checked}
          className='!m-0'
        />
      </div>
      <p className='font-normal text-base w-full text-center my-3'> {title}</p>
    </div>
  );
};

export default CheckboxText;
