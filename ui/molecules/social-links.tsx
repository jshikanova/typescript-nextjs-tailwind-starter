import { SocialLink } from '@utils';

export const SocialLinks = ({ links }: { links: SocialLink[] }) => {
  return (
    <>
      {links.map(({ title, href, Icon }) => (
        <a
          key={href}
          href={href}
          rel="nofollow noopener noreferrer"
          target="_blank"
          title={title}
          className="mx-2px rounded-4 hover:bg-steel-teal p-4px bg-onyx transition-colors"
        >
          <Icon size={16} className="text-cultured" />
        </a>
      ))}
    </>
  );
};
