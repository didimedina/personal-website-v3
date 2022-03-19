import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Trigger } from '@radix-ui/react-dropdown-menu';


export default function Dropdown() {
    return (
      <div className={`w-auto h-screen flex justify-center items-center bg-slate-4 outline-none`}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="h-8 bg-slate-6 px-4 rounded-md focus-visible:outline-none">Settings</DropdownMenu.Trigger>
  
          <DropdownMenu.Content className="w-44 overflow-hidden border border-slate-8 border-solid rounded-md mt-1 ">
            <DropdownMenu.Item className="border-b border-slate-8 px-2 py-1 hover:bg-slate-6 hover:outline-none">Item One</DropdownMenu.Item>
            <DropdownMenu.Item>Item Two</DropdownMenu.Item>
            <DropdownMenu.Item>Item Three</DropdownMenu.Item>
            <DropdownMenu.CheckboxItem>Click Me</DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
          
        </DropdownMenu.Root>
      </div>
    )
  }