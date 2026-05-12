import { FC, useState } from "react"

interface CardProps {
  image: string
  desc: string
  children: React.ReactNode
}
const Card: FC<CardProps> = ({ image, desc, children }) => {
const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <div className="card">
      <img src={image} alt=""/>
      <p>{desc}</p>

      {showInfo && (
        <div>
          <p>{children}</p>
        </div>
      )}

      <div>
        {!showInfo ? (
          <button
            onClick={() => setShowInfo(true)}
            style={{ backgroundColor: '#365a00', color: 'white' }}
          >
            Показать описание
          </button>
        ) : (
          <button
            onClick={() => setShowInfo(false)}
            style={{ backgroundColor: '#8bbc41', color: 'white' }}
          >
            Скрыть описание
          </button>
        )}
      </div>
    </div>
  );
};
export default Card
