import { SocialLink } from '@utils';

import { SocialLinks } from '@ui/molecules';

export const Footer = ({ socialLinks }: { socialLinks?: SocialLink[] }) => {
  return (
    <footer className="py-2 bg-cultured">
      <div className="container">
        <p className="text-center font-bold">Have a nice day! ✌️</p>
        {socialLinks && (
          <div className="flex justify-center mt-2">
            <SocialLinks links={socialLinks} />
          </div>
        )}
      </div>
    </footer>
  );
};
