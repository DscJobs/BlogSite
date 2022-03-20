import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-secondary_two hover:text-secondary_three dark:hover:text-secondary_four">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
