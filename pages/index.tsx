// import type { NextPage } from 'next'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'; 

function autoDark(color){

  let modifiedColor = `dark:bg-dark-${color}`

  return modifiedColor
}

const isDarkMode = true

export default function Home() {
  return (
    <div className={`w-auto h-screen flex justify-center items-center bg-slate3 dark:bg-dark-slate3`}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="h-8">Settings</DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item>Item One</DropdownMenu.Item>
          <DropdownMenu.Item>Item Two</DropdownMenu.Item>
          <DropdownMenu.Item>Item Three</DropdownMenu.Item>
          <DropdownMenu.CheckboxItem>Click Me</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
        
      </DropdownMenu.Root>
    </div>
  )
}
