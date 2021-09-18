import { Photo } from "./photo";
import { Video } from "./Video";

export interface Profile{
  id : string;
  email : string;
  token: string;
  name: string;
 resume: string;
  lastName: string;
  firstName: string;
  age: string;
  profession: string;
  picture: string;
  photos: Photo[];
  uName : string;
  userName : string;
  video: Video;
  personnel: string;
  fofSpecialties: string;
  description: string;
  website: string;
phoneNumber : string;
  address: string;


}
