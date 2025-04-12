interface FeatureItemProps {
  text: string;
  centered?: string;
  delay?: string;
}

export default function FeatureItem({
  text,
  centered = "",
  delay = "",
}: FeatureItemProps) {
  return (
    <div
      className={`flex justify-start space-x-2 ${delay} ${
        centered ? "justify-center text-left " + centered : ""
      }`}
    >
      <span>✨</span>
      <p className="text-base md:font-semibold"> {text}</p>
    </div>
  );
}
