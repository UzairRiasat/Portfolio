type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 xl:mb-14 2xl:mb-20 ${isCenter ? "text-center" : "text-center xl:text-left"}`}>
      <p className={`section-label ${isCenter ? "" : "xl:mx-0 mx-auto"}`}>{label}</p>
      <h2 className="h2 mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p
        className={`text-white/60 text-base xl:text-lg leading-relaxed max-w-[560px] ${
          isCenter ? "mx-auto" : "mx-auto xl:mx-0"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;