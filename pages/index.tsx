// import type { NextPage } from 'next'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'; 

export default function Home() {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>Settings</DropdownMenu.Trigger>

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
