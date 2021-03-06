import RootStore from "./store";

export interface IUser {
  readonly id: number;
  email: string;
  name: string;
  surname: string;
}

export interface IStoreProps {
  store: RootStore;
}

export interface IRecord {
  readonly id?: number;
  title: string;
  description: string;
  authorEmail?: string;
  editorData?: {
    time: number;
    version: string;
    blocks: { type: string; data: any }[];
  };
  timestamp?: string;
}
