import "./ProgressBar.css";

function ProgressBar({percents}) {
  const getColor = () => {
  if (percents < 40) return "red";
  if (percents < 70) return "yellow";
  return "green";
};
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${percents}%`, background: getColor() }}
      ></div>
    </div>
  );
}

export default ProgressBar;
