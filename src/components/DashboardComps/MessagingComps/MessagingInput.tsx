import { CamIcon, LinkIcon, LocationIcon } from '@/SVGs/CustomSVGs';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { BsEmojiSmile, BsXLg } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

const MessagingInput = ({
  sendMessage,
  newMessage,
  setNewMessage,
}: {
  sendMessage: () => void;
  newMessage: string;
  setNewMessage: Dispatch<SetStateAction<string>>;
}) => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setNewMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <section className='w-full flexflex-col gap-2 py-5'>
      <article className='flex-1 relative flex items-center gap-2'>
        <div className='absolute left-2 top-[35%] bottom-0'>
          <button onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}>
            <BsEmojiSmile className='text-Grey6' />
          </button>

          <div className='absolute bottom-[15%] right-10 z-10 flex flex-col flex-end '>
            {isEmojiPickerOpen && (
              <div className='flex justify-end text-end mb-[-20px] m-2 z-50'>
                <button
                  onClick={() => setIsEmojiPickerOpen(false)}
                  className='w-10 h-10 rounded-full bg-red-400 text-white p-3 grid place-items-center'
                >
                  {' '}
                  <BsXLg />{' '}
                </button>
              </div>
            )}
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              open={isEmojiPickerOpen}
              theme={Theme.DARK}
              skinTonesDisabled={true}
              className='!pt-10'
            />
          </div>
        </div>
        <textarea
          value={newMessage}
          placeholder='Send message'
          className='form-controls !pl-10'
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          rows={1}
        />
        <div className='flex'>
          <button
            className='bg-pryColor w-10 h-10 rounded-full grid place-items-center text-white'
            onClick={sendMessage}
          >
            <MdSend />
          </button>
        </div>
      </article>

      <article className='flex items-center gap-6 mt-4'>
        <CamIcon /> <LinkIcon /> <LocationIcon />
      </article>
    </section>
  );
};

export default MessagingInput;
