import { Dispatch, ForwardedRef, Ref, RefObject, SetStateAction } from "react";


export interface LinkType {
  name: string;
  path: string;
}

export interface Breed {
  id: string;
  name: string;
}

export interface PetType {
  id: string;
  name: string | null;
  date: number | null;
  breed: Breed[];
  city: string;
  photos: string[];
  description: string;
}

export interface FormState {
  name: string;
  date: string;
  breeds: string[];
  city: string;
  images: Blob[];
}

export interface PropsActionForm {
  state: RefObject<FormState>
}