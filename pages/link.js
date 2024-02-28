import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          listStyle: 'none',
          padding: 0
        }}
      >
        <li style={{ marginRight: '10px' }}>
          <Link href='/index2'>番号検索</Link>
        </li>
        <li>
          <Link href='/index3'>名前検索</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
