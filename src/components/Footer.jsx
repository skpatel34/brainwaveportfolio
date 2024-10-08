import { socials } from "../constants/iandex";
import Section from "./section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex sm:justify-between justify-center  items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear()}.All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-n-7 transition-color hover:bg-n-6 "
              key={item.id}
            >
              <img
                src={item.iconUrl}
                className=""
                width={16}
                height={16}
                alt={item.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
