import type { StaffMember } from '@/types';

/**
 * STAFF
 * -----
 * Replace the placeholders with real staff members (managers, coaches, content, community...).
 * Optional fields: image, bio, socials. Delete `placeholder: true` once real.
 */
export const staff: StaffMember[] = [
  {
    id: 'staff-1',
    name: 'Staff Member',
    role: { en: 'Staff role', fr: 'Rôle au sein du staff', ar: 'دور عضو الطاقم' },
    bio: {
      en: 'Short staff biography goes here.',
      fr: 'La courte biographie du membre du staff ira ici.',
      ar: 'ستُضاف هنا نبذة قصيرة عن عضو الطاقم.',
    },
    placeholder: true,
  },
  {
    id: 'staff-2',
    name: 'Staff Member',
    role: { en: 'Staff role', fr: 'Rôle au sein du staff', ar: 'دور عضو الطاقم' },
    bio: {
      en: 'Short staff biography goes here.',
      fr: 'La courte biographie du membre du staff ira ici.',
      ar: 'ستُضاف هنا نبذة قصيرة عن عضو الطاقم.',
    },
    placeholder: true,
  },
];
