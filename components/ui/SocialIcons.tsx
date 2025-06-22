import Image from 'next/image';

const SocialIcons = () => {
  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 z-20">
      <a href="https://x.com/niggasinparisol" target="_blank" rel="noopener noreferrer">
        <Image
          src="/x.png"
          width={80}
          height={80}
          alt="X"
          className="cursor-pointer transition-transform hover:scale-110"
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image
          src="/attach.png"
          width={80}
          height={80}
          alt="Attach"
          className="cursor-pointer transition-transform hover:scale-110"
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image
          src="/mask.png"
          width={80}
          height={80}
          alt="Mask"
          className="cursor-pointer transition-transform hover:scale-110"
        />
      </a>
    </div>
  );
};

export default SocialIcons; 