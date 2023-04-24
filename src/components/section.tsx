import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { Element } from "react-scroll";

interface SectionProps {
  title: string;
  id: string;
  children: ReactNode | ReactNode[];
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  id,
  title,
  children,
}) => {
  return (
    <Element id={id} className="section-container" name={id}>
      <h3 className="text-3xl mb-5">{title}</h3>
      <div className={clsx(["flex flex-col justify-start gap-4", "text-md"])}>
        {children}
      </div>
    </Element>
  );
};

export default Section;
