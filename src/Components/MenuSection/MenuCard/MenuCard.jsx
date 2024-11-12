export default function MenuCard(props) {
  const { id, src, title, score, review, price } = props;
  return (
    <div className="flex-1 bg-whiteC p-8 rounded-lg font-barlow flex flex-col items-strecth">
      <img src={src} alt={id} className="self-center" />
      <div>
        <h3 className="my-4 text-2xl">{title}</h3>
        <div className="flex justify-between">
          <div className="text-greyLightC flex items-center gap-2 text-sm">
            <p>{score}</p>
            <p>{review}</p>
          </div>
          <p className="text-xl font-bold">{price}₺</p>
        </div>
      </div>
    </div>
  );
}
