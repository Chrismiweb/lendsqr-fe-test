type Props = {
  title: string;
  items: [string, string][];
};

const DetailsBlock = ({ title, items }: Props) => {
  return (
    <div className="details-block">
      {title && <h4>{title}</h4>}

      <div className="grid">
        {items.map(([label, value]) => (
          <div key={label} className="grid-infos">
            <p className="label">{label}</p>
            <p className="value">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsBlock;
