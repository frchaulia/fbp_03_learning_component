import { getImageUrl2 } from '@/utils/utils';

interface AvatarProops {
  person: any;
  size: any;
}  
function MyAvatar({person, size}: AvatarProops) {
  const imageSize = size < 90 ? 's' : 'b';

  return (
    <section>
    <img
      className="avatar"
      src={getImageUrl2(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
    </section>
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP',
      }}
      size={40}
    />
  );
}