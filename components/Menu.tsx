import Link from 'next/link'

export function Menu() {
  return (
    <>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/scrabble"><a>Scrabble</a></Link></li>
      </ul>
      < hr style={{marginBottom: '40px'}} />
    </>
  )
}