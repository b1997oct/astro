
export default function Text({ className, ...props }) {
  return (
    <span className={'text-blue-600 ' +className} {...props} />
  )
}
