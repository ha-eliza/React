export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}
interface CardProps{
  width: string
  height: string,
  children: React.ReactNode,
  variant: CardVariant,
  onClick: () => void
}
function Card({width, height, children, variant, onClick}: CardProps) {
  return (
    <div style={{
      width,
      height,
      background: variant === CardVariant.primary ? 'red' : 'none',
      border: variant === CardVariant.outlined ? '2px solid red' : 'none',
      margin: '20px'}} onClick={onClick}>
      {children}
    </div>
  )
}
export default Card
