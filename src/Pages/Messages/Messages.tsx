import { msgTypeData } from '@/components/AllData';
import MessagingInput from '@/components/DashboardComps/MessagingComps/MessagingInput';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import { useState } from 'react';
import a from '@/assets/Avatar-2.png';
import b from '@/assets/doc2.png';
import { BsSearch, BsThreeDots } from 'react-icons/bs';

const Messages = () => {
  useUpdatePageName('Messages');

  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = () => {};

  return (
    <main className=' py-6 px-5 bg-Grey4 h-[90vh] flex justify-between gap-4'>
      <section className=' bg-white w-4/12 py-3 rounded-lg !h-full card'>
        <ul className='flex justify-between items-center rounded-lg bg-Grey4 p-1 container'>
          {msgTypeData.TabTitle.map(({ id, title, icon }) => (
            <li key={id} className='flex-1'>
              <TabTitle
                id={id}
                title={title}
                icon={icon}
                activeClass='active'
                notActiveClass='notActive'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
          ))}
        </ul>

        <article className='mt-3 h-5/6 overflow-hidden'>
          {msgTypeData.TabContents.map(({ id, comp }) => (
            <div key={id}>
              <TabContents id={id} activeTab={activeTab} comps={comp} />
            </div>
          ))}
        </article>
      </section>

      <section className=' bg-white flex-1 p-3 rounded-lg !h-full card  flex flex-col justify-between divide-y'>
        <article className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <figure className='messageAvatar'>
              <img src={a} alt='' />
            </figure>
            <div>
              <h5 className='text-sm font-semibold'>Mark Spence</h5>
              <small>Online</small>
            </div>
          </div>

          <div className='flex gap-2 items-between'>
            <BsSearch />
            <BsThreeDots />
          </div>
        </article>

        <article className='h-[70%]'>
          <div className='py-5'>
            <p className='text-center text-sm text-Grey6'>
              Your conversation with Daniel starts here
            </p>
            <div className='flex items-center justify-center gap-5 py-2'>
              <hr className='grow' />{' '}
              <p className='flex-1 text-center '>June 1, 2020</p>{' '}
              <hr className='grow' />
            </div>
          </div>

          <article className='flex flex-col justify-between h-4/6 overflow-y-auto'>
            <div className='flex gap-2 w-6/12'>
              <figure className=' w-[32px] h-[32px] overflow-hidden rounded-full  transition-all'>
                <img
                  src={a}
                  alt=''
                  className='!w-full !h-full object-cover object-top'
                />
              </figure>
              <div className='flex-1 flex flex-col mb-3'>
                {/* <hgroup className='flex items-center gap-2'>
                  <h4>David Odafe</h4>
                </hgroup> */}
                <p className=' p-5 bg-Grey3 rounded-xl mb-1 text-sm'>
                  It is a good idea that we are now coming to that understanding
                  cus we have been treated badly.
                </p>
                <small className='text-Grey6 '>2:45 PM</small>
              </div>
            </div>

            <div className='flex flex-col justify-end items-end gap-2 mt-3'>
              <div className='flex justify-end w-6/12 gap-2'>
                <div className='flex flex-col mb-3 flex-1'>
                  <p className='p-5 bg-[#075DC11A] text-[black] text-sm rounded-xl mb-1'>
                    It is a good idea that we are now coming to that
                    understanding cus we have been treated badly.
                  </p>
                  <small className='text-Grey6 text-end'>2:45 PM</small>
                </div>
                <figure className=' w-[32px] h-[32px] overflow-hidden rounded-full  transition-all'>
                  <img
                    src={b}
                    alt=''
                    className='!w-full !h-full object-cover'
                  />
                </figure>
              </div>
              <div className='flex justify-end w-6/12 gap-2'>
                <div className='flex flex-col mb-3 flex-1'>
                  <p className='p-5 bg-[#075DC11A] text-[black] text-sm rounded-xl mb-1'>
                    It is a good idea that we are now coming to that
                    understanding cus we have been treated badly.
                  </p>
                  <small className='text-Grey6 text-end'>2:45 PM</small>
                </div>
                <figure className=' w-[32px] h-[32px] overflow-hidden rounded-full  transition-all'>
                  <img
                    src={b}
                    alt=''
                    className='!w-full !h-full object-cover'
                  />
                </figure>
              </div>
            </div>
          </article>
        </article>
        <MessagingInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessage={sendMessage}
        />
      </section>
    </main>
  );
};

export default Messages;
