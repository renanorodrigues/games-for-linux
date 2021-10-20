import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return(
    <Link href="/">
      <a>
        <Image src="/assets/logo-games.png" alt="Logo Games4Linux" width={40} height={40} />
      </a>
    </Link>
  )
}

export default Logo;