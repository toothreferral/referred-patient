import React, { FormEvent, useEffect, useRef, useState } from 'react';
import Spinner from '../../spinner/Spinner';
import { useGlobalHooks } from '../../Hooks/globalHooks';
// import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CountDownTimer from '@/components/CountDownTimer';
import ErrorMessage from '@/components/ErrorMessage';
import BrandLogo from '@/components/BrandLogo';

const numInput = [
  { id: '1', name: 'num1' },
  { id: '2', name: 'num2' },
  { id: '3', name: 'num3' },
  { id: '4', name: 'num4' },
  { id: '5', name: 'num5' },
  { id: '6', name: 'num6' },
];

const VerifyEmail = () => {
  const { loading, setLoading, errors, setErrors } = useGlobalHooks();
  const [timeLeft, setTimeLeft] = useState(60);
  const route = useNavigate();
  // const { userEmail } = useAppSelector(selectUserData);

  const [verifyCode, setVerifyCode] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
    num6: '',
  });

  const inputRefs = useRef([
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
  ]);

  const handleChange = (e: FormEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target as HTMLInputElement;
    setVerifyCode({ ...verifyCode, [`num${index + 1}`]: value });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current?.focus();
    }
  };

  const handleReSendOTP = async () => {
    setLoading(() => ({ ['resend']: true }));

    // try {
    //   const rsp = await ResendOTP({ email: userEmail });

    //   if (rsp.error) {
    //     handleError(rsp?.message);
    //   } else {
    //     toast.success(rsp?.message);
    //   }
    //   setLoading(() => ({ ['resend']: false }));
    // } catch (error) {
    //   console.log(error);
    //   setLoading(() => ({ ['resend']: false }));
    // }
  };

  // const clearInput = () => {
  //   setVerifyCode({
  //     num1: '',
  //     num2: '',
  //     num3: '',
  //     num4: '',
  //   });
  // };

  const handleVerifyEmail = async () => {
    // e.preventDefault();
    setLoading(() => ({ ['verify']: true }));

    if (Object.values(verifyCode).some((code) => code === '')) {
      setErrors({
        error: true,
        errMessage: 'Enter the code sent to your email',
      });
      setLoading(() => ({ ['verify']: false }));

      return;
    }

    // const verificationCode = Object.values(verifyCode).join('');

    route('/onboarding');

    // try {
    //   const rsp = await VerifyOTP({ otp: Number(verificationCode) });

    //   if (rsp.error) {
    //     handleError(rsp?.message);
    //   } else {

    //   }
    //   setLoading(() => ({ ['verify']: false }));
    // } catch (error) {
    //   console.log(error);
    //   setLoading(() => ({ ['verify']: false }));
    // }
  };

  // When delete is pressed it should delete backward and jump focus to current input
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    // Detect if backspace or delete key is clicked, if yes and the current input value is empty, jump backward to next one if available
    if (e.key === 'Backspace' && !e.currentTarget?.value && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    }
  };

  // Auto focus on component mount
  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

  useEffect(() => {
    if (
      verifyCode.num1 &&
      verifyCode.num2 &&
      verifyCode.num3 &&
      verifyCode.num4 &&
      verifyCode.num5 &&
      verifyCode.num6
    ) {
      handleVerifyEmail();
    }
  }, [verifyCode]);

  // console.log(errors);

  return (
    <main className='  flex flex-col items-center gap-4 justify-center bg-pryColor-400 min-h-screen'>
      <section className=' w-11/12 md:w-5/12 mx-auto flex flex-col justify-center gap-4 bg-white rounded-lg  p-7'>
        <article className='flex flex-col items-center justify-center gap-4'>
          <BrandLogo className='w-10/12 md:w-4/12' />
          <hgroup className='text-center'>
            <h2 className='font-Karla font-bold mb-5'>Sign up with Email</h2>
            <p>
              To verify your email we&apos;ve sent a code to john@gmail.com.
              Enter the code to continue
            </p>
          </hgroup>
        </article>
        <form
        // onSubmit={handleVerifyEmail}
        >
          <ul className={`flex items-center gap-2 justify-center`}>
            {numInput.map(({ id, name }, idx) => (
              <li className='w-2/12 lg:w-1/12' key={id}>
                <input
                  ref={inputRefs.current[idx]}
                  id={id}
                  type='text'
                  name={name}
                  onChange={(e) => handleChange(e, idx)}
                  onKeyDown={(e) => handleKeyPress(e, idx)}
                  maxLength={1}
                  defaultValue={verifyCode[name as keyof typeof verifyCode]}
                  className={`${
                    !loading['verify'] &&
                    errors.error &&
                    'errors animate__animated  animate__shakeY'
                  }  form-controls !p-1 text-center h-[50px]`}
                />
              </li>
            ))}
          </ul>
          <article>
            <div className='mt-5'>
              <button
                className='main-btn w-full'
                type='button'
                onClick={handleVerifyEmail}
              >
                {' '}
                {loading['verify'] ? <Spinner /> : 'Verify '}
              </button>
            </div>{' '}
            <div className='flex justify-center my-2'>
              {!loading['verify'] && errors.error && (
                <ErrorMessage message={errors.errMessage} />
              )}
            </div>
          </article>{' '}
          <article className='text-center w-full flex items-center gap-1 justify-center'>
            <p onClick={handleReSendOTP} className='text-grey1'>
              Didn&apos;t receive a code?
            </p>
            {timeLeft > 0 ? (
              <CountDownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
            ) : (
              <button
                className='text-pryColor font-bold '
                type='button'
                onClick={handleReSendOTP}
              >
                {loading['resend'] ? <Spinner /> : 'Request again'}
              </button>
            )}
          </article>
        </form>
      </section>
    </main>
  );
};

export default VerifyEmail;
