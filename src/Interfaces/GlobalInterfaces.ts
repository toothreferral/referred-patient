import { ReactNode } from 'react';

export interface TabProps {
  id: string;
  title?: string;
  icon?: ReactNode;
  activeClass?: string;
  notActiveClass?: string;
  activeTab?: string;
  setActiveTab?: (id: string) => void;
}

export interface TabContentsProps {
  id: string;
  activeTab?: string;
  comps?: ReactNode;
}

export interface IStepForm {
  onNext: () => void;
  onPrevious?: () => void;
}

export interface IStoreSetup {
  type?: string;
  label?: string;
  id: string;
  name: string;
  require?: boolean;
  disabled?: boolean;
  placeholder?: string;
  checked?: boolean;
  value?: string | number;
  options?: { [key: string]: string }[] | string[];
}

export interface IModal {
  id: string;
  close?: () => void;
}

export interface IWithdrawReq {
  id: number;
  tranType: string;
  createdAt: string;
  amount: number;
  status: string;
}

export interface IColData {
  selector?: (row: any) => string;
  cell?: (row: any) => ReactNode;
  ignoreRowClick?: boolean;
  allowOverflow?: boolean;
  button?: boolean;
  [key: string]: string | number | any;
}
