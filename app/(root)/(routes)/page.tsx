import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import SearchInput from '@/components/search-input'
import prismadb from '@/lib/prismadb'
import Categories from '@/components/categories'
import Companion from '@/components/companions'

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  }
}
const RootPage = async ({
  searchParams
}: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name
      }
    },
    orderBy: {
      creatAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        }
      }
    }
  })
  const categories = await prismadb.category.findMany()

  return ( 
    <div>
      <div className='h-full p-4 space-y-2'>
        <SearchInput/>
        <Categories data = {categories}/>
        <Companion data = {data}/>
      </div>
    </div>
   );
}
 
export default RootPage;
