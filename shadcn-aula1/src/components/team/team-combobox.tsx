"use client"
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Roles } from "@/types/roles"

const roles = [
    {
        label: "Owner",
        description: "owner Lorem ipsum dolor sit",
        value: "owner"
    },
    {
        label: "Billing",
        description: "Billing Lorem ipsum dolor sit",
        value: "billing"
    },
    {
        label: "Developer",
        description: "Developer Lorem ipsum dolor sit",
        value: "developer"
    },
    {
        label: "Viewer",
        description: "Viewer Lorem ipsum dolor sit",
        value: "viewer"
    },
]

type Props = {
    value: Roles
    setValue: (newValue:Roles) => void;
}

export function TeamCombobox({value, setValue}:Props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {value
                        ? roles.find((roles) => roles.value === value)?.label
                        : "Select role..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Search role..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No role found.</CommandEmpty>
                        <CommandGroup>
                            {roles.map((role) => (
                                <CommandItem
                                    key={role.value}
                                    value={role.value}
                                    onSelect={(currentValue) => {
                                        //setValue(currentValue === value ? "" : currentValue)
                                        setValue(currentValue as Roles)
                                        setOpen(false)
                                    }}
                                >
                                    <div>
                                        <p>{role.label}</p>
                                        <p className="text-muted-foreground">{role.description}</p>
                                    </div>
                                    
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === role.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
