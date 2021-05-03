import {Photo} from './photo';

export interface Member {
  id: number;
  username: string;
  photoUrl: string;
  gender: string;
  introduction: string;
  lookingFor: string;
  city: string;
  country: string;
  interests: string;
  knownAs: string;
  age: number;
  created: Date;
  lastActive: Date;
  photos: Photo[];
}
