const BG_URL = '/lp/especial-copa/campo-background.webp'

export default function CopaBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG_URL})` }}
    />
  )
}
