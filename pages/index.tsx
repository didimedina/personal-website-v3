// import type { NextPage } from 'next'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'; 

export default function Home() {
  return (
    <div className="w-auto h-screen flex justify-center items-center grow-0 bg-slate3">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="h-8">Settings</DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item>Item One</DropdownMenu.Item>
          <DropdownMenu.Item>Item Two</DropdownMenu.Item>
          <DropdownMenu.Item>Item Three</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

// const Home: NextPage = () => {
//   return (
//     <div>Hello World</div>
//   )
// }

// export default Home
