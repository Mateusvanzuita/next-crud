interface EntradaProps {
  type?: 'text' | 'number'
  text: string
  value: any
  somenteLeitura?: boolean
  valorMudou?: (value: any) => void
  className?: string

}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">
    {props.text}
      </label>
      <input type={props.type ?? 'text'} onChange={e => props.valorMudou?.(e.target.value)} value={props.value} readOnly={props.somenteLeitura} className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}`}/>
    </div>
  )
}