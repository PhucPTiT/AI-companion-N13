import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import SearchInput from '@/components/search-input'
export default function RootPage() {
  return (
    <div>
      <div className='h-full p-4 space-y-2'>
        <SearchInput/>
      </div>
    </div>
  )
}
