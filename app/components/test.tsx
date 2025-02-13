const oceanBG = [
  "bg-ocean-0",
  "bg-ocean-25",
  "bg-ocean-50",
  "bg-ocean-100",
  "bg-ocean-200",
  "bg-ocean-300",
  "bg-ocean-400",
  "bg-ocean-500",
  "bg-ocean-600",
  "bg-ocean-700",
  "bg-ocean-800",
  "bg-ocean-900",
  "bg-ocean-950",
  "bg-ocean-1000",
];

const oceanText = [
  "text-ocean-0",
  "text-ocean-25",
  "text-ocean-50",
  "text-ocean-100",
  "text-ocean-200",
  "text-ocean-300",
  "text-ocean-400",
  "text-ocean-500",
  "text-ocean-600",
  "text-ocean-700",
  "text-ocean-800",
  "text-ocean-900",
  "text-ocean-950",
  "text-ocean-1000",
];

export const Test = () => {
  return (
    <>
      <div className="w-dvh mx-auto p-10 bg-ocean-0">
        <div className="flex gap-4">
          {oceanBG.map((color) => (
            <div key={color} className={`h-10 w-10 ${color}`} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {oceanText.map((color) => (
            <h2 key={color} className={`text-4xl ${color}`}>
              Hello
            </h2>
          ))}
        </div>
      </div>
      <div className="w-dvh mx-auto p-10 bg-ocean-100">
        <div className="flex gap-4">
          {oceanBG.map((color) => (
            <div key={color} className={`h-10 w-10 ${color}`} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {oceanText.map((color) => (
            <h2 key={color} className={`text-4xl ${color}`}>
              Hello
            </h2>
          ))}
        </div>
      </div>
    </>
  );
};
