import {Photo} from './photo';
export interface Facility{

  name: string;
  address: string;
  website: string;
  description: string;
  fofSpecialties: string;
  personnel: string;
  email: string;
  photos: Photo[];

}

