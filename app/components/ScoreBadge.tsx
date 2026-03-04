const ScoreBadge = ({ score }: { score: number }) => {
  let bgColor: string;
  let textColor: string;
  let label: string;

  if (score > 69) {
    bgColor = "bg-green-100";
    textColor = "text-green-600";
    label = "Strong";
  } else if (score > 49) {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-600";
    label = "Good Start";
  } else {
    bgColor = "bg-red-100";
    textColor = "text-red-600";
    label = "Needs Work";
  }

  return (
    <div className={`${bgColor} px-3 py-1 rounded-full inline-block`}>
      <p className={`${textColor} text-sm font-semibold`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
