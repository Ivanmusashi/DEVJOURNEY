

type Props = {
  title: string;
  description: string;
};

export const UnitBanner = ({ title, description }: Props) => {
  return (
    <div className="bg-gray-900 p-6 shadow-lg rounded-lg mb-10 flex items-center justify-between">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
     
    </div>
  );
};