import Link from "next/link";
import React from "react";

interface SocialLinkProps {
  url: string;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, text }) => {
  return (
    <Link href={url} className="mr-2">
      {text}
    </Link>
  );
};

export default SocialLink;
