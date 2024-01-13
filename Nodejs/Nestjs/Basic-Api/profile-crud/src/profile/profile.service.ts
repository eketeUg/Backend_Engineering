import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

export type role = 'INTERN' | 'ENGINEER' | 'ADMIN';
// export type profile = {
//   name: string;
//   email: string;
//   role: role;
// };

@Injectable()
export class ProfileService {
  private profiles = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(role?: role) {
    if (role) {
      const rolesArray = this.profiles.filter(
        (profile) => profile.role === role,
      );
      if (rolesArray.length === 0)
        throw new NotFoundException('Roles not found');

      return rolesArray;
    }

    return this.profiles;
  }

  findOne(id: number) {
    const profile = this.profiles.find((profile) => profile.id === id);

    if (!profile) throw new NotFoundException('User not found');

    return profile;
  }

  create(profile: CreateProfileDto) {
    //sorting the array to get the profile with the highest id
    const profileByHighestId = [...this.profiles].sort((a, b) => b.id - a.id);
    const newProfile = {
      id: profileByHighestId[0].id + 1,
      ...profile,
    };

    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: number, updateProfile: UpdateProfileDto) {
    this.profiles = this.profiles.map((profile) => {
      if (id === profile.id) {
        return (profile = { ...profile, ...updateProfile });
      }
      return profile;
    });
    // to return only the updated profile, call the findOne method
    return this.findOne(id);
  }

  delete(id: number) {
    // get the profileyou want to remove
    const deletedProfile = this.findOne(id);
    // using filter to delete the profile
    this.profiles = this.profiles.filter((profile) => profile.id !== id);

    return deletedProfile;
  }
}
