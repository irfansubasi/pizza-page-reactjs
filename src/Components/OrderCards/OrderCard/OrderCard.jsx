export default function OrderCard(props) {
  const { title, className, headingLevel, subtitle } = props;
  const Heading = headingLevel === 'h1' ? 'h1' : 'h3';

  const headingClass =
    headingLevel === 'h1'
      ? 'text-4xl md:text-7xl font-quattrocento font-bold'
      : 'text-2xl font-semibold w-3/6';

  return (
    <div
      className={`flex-1 w-full p-10 rounded-[10px] gap-4 flex flex-col items-start justify-start font-barlow font-semibold ${className}`}
    >
      <Heading className={headingClass}>{title}</Heading>
      {subtitle && <p>{subtitle}</p>}
      <a
        className="bg-whiteC text-greyDarkC text-xs rounded-full px-6 py-3 text-redC hover:text-whiteC hover:bg-greyLightC"
        href="#"
      >
        SİPARİŞ VER
      </a>
    </div>
  );
}
