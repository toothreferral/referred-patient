import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { TeethDiagram } from '@/SVGs/CustomSVGs';
import { FC, useState } from 'react';
import CheckboxText from '../../CheckboxText';

const PatientCharts: FC<IStepForm> = ({ onPrevious, onNext }) => {
  const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({
    1: true,
  });
  const [selected, setSelected] = useState<string>('');

  const [selectedNumber, setSelectedNumber] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToothClick = (id: string) => {
    setSelectedNumber((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleChange = (id: number, title: string) => {
    setIsChecked(() => ({ [id]: true }));
    setSelected(title);
  };

  const specialityData = [
    { id: 1, title: 'Tooth/Teeth requires extraction', checked: isChecked },
    { id: 2, title: 'Tooth/Teeth of Interest', checked: isChecked },
    { id: 3, title: 'Implant Placement', checked: isChecked },
  ];
  console.log(selected);
  return (
    <main>
      <h5 className='text-center'> Chart</h5>
      <ul className='flex flex-wrap gap-3 mt-9 w-full lg:w-10/12 mx-auto '>
        {specialityData?.map(({ id, title, checked }) => (
          <li
            key={id}
            className='w-full md:w-[32%] animate__animated animate__bounceIn'
          >
            <CheckboxText
              checked={checked[id] || selected === title ? true : false}
              title={title}
              onClick={() => handleChange(id, title)}
            />
          </li>
        ))}
      </ul>
      <section className='w-full lg:w-9/12 mx-auto mt-10'>
        <ul className='flex flex-wrap gap-1 mt-5 w-full lg:w-7/12 mx-auto'>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((item) => (
            <li
              key={item}
              className={`${
                selectedNumber[item] ? 'bg-positive text-white' : ''
              } rounded-lg  !border border-Grey3 font-semibold flex-1 text-center`}
            >
              <button
                className='p-2'
                onClick={() => handleToothClick(`${item}`)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <ul className='flex flex-wrap gap-1 mt-5'>
          {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
            <li
              key={num}
              className={`${
                selectedNumber[num] ? 'bg-positive text-white' : ''
              } rounded-lg  !border border-Grey3 font-semibold flex-1 text-center`}
            >
              <button
                className='p-2'
                onClick={() => handleToothClick(`${num}`)}
              >
                {num}
              </button>
            </li>
          ))}
        </ul>
        <article className='my-10'>
          <TeethDiagram
            isSelected={selectedNumber}
            onToothClick={handleToothClick}
          />
        </article>

        <ul className='flex flex-wrap gap-1'>
          {Array.from({ length: 32 }, (_, i) => i + 1)
            .slice(16)
            .reverse()
            .map((num) => (
              <li
                key={num}
                className={`${
                  selectedNumber[num] ? 'bg-positive text-white' : ''
                } rounded-lg  !border border-Grey3 font-semibold  flex-1 text-center`}
              >
                <button
                  className='p-2'
                  onClick={() => handleToothClick(`${num}`)}
                >
                  {num}
                </button>
              </li>
            ))}
        </ul>
        <ul className='flex flex-wrap gap-1 mt-5 w-full lg:w-7/12 mx-auto'>
          {['T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K'].map((item) => (
            <li
              key={item}
              className={`${
                selectedNumber[item] ? 'bg-positive text-white' : ''
              } rounded-lg  !border border-Grey3 font-semibold flex-1 text-center`}
            >
              <button
                className='p-2'
                onClick={() => handleToothClick(`${item}`)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <article className='flex flex-col mt-10'>
          <p>Upload Photos (Optional)</p>
          <div className='h-40 border border-[#E5E7EB] grid place-items-center w-4/12 rounded-lg border-dashed mt-2'>
            <label
              htmlFor='chart'
              className={` !text-black !m-0 flex flex-col justify-center cursor-pointer`}
            >
              <span>
                Drop your files here or{'  '}
                <span className='text-pryColor font-semibold'> browse</span>
              </span>

              <span className='text-center text-Grey1'>Maximum size: 50MB</span>
            </label>
            <input id='chart' type='file' className='hidden' />
          </div>
        </article>
      </section>

      <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
        <button onClick={onPrevious} className='outline-dark w-full md:w-fit '>
          Back
        </button>
        <button
          className='main-btn w-full md:w-fit'
          type='submit'
          onClick={onNext}
          disabled={Object.keys(selectedNumber).length === 0}
        >
          Continue
        </button>
      </article>
    </main>
  );
};

export default PatientCharts;
