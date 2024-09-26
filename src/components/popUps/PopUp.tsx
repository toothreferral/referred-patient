/* eslint @typescript-eslint/no-explicit-any: "off" */

import React, { ReactNode, useEffect, useRef } from 'react';

import { selectGlobal } from '../../Redux/Features/globalSlice';
import { useSelector } from 'react-redux';
import './PopUp.scss';
import { useGlobalHooks } from '../../Hooks/globalHooks';

interface PopUpProps {
  id: string | number;
  children: ReactNode;
  className?: string;
}

const PopUp: React.FC<PopUpProps> = ({ className, id, children }) => {
  const show = useSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();
  const popupRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (popupRef.current === e.target) {
        handleShow(id);
      }
    };

    const closeOnEscBtn = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && show[id]) {
        handleShow(id);
      }
    };

    if (show[id]) {
      // Prevent body scrolling when modal is active
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scrolling when modal is hidden
      document.body.style.overflow = 'auto';
    }

    // Add the event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', closeOnEscBtn);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', closeOnEscBtn);
      document.body.style.overflow = 'auto';
    };
  }, [id, handleShow]);

  return (
    <>
      {show[id] && (
        <div className={`${className} popUp_container`} ref={popupRef}>
          {children}
        </div>
      )}
    </>
  );
};

export default PopUp;
