import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
} from "lucide-react"

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Workspace",
      menus: [
        {
          href: "/portal/workspace",
          label: "All workspaces",
          active: pathname.includes("/portal/workspace"),
          icon: SquarePen,
          submenus: [],
        },
        {
          href: "/portal/workspace/create",
          label: "Create",
          active: pathname.includes("/portal/workspace/create"),
          icon: Bookmark,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Assessment",
      menus: [
        {
          href: "",
          label: "Video",
          active: pathname.includes("/portal/assessment/video"),
          icon: Users,
          submenus: [
            {
              href: "/portal/assessment/video",
              label: "All video assessments",
              active: pathname === "/portal/assessment/video",
            },
            {
              href: "/portal/assessment/video/create",
              label: "Create video assessment",
              active: pathname === "/portal/assessment/video/create",
            },
          ],
        },
        {
          href: "",
          label: "Coding",
          active: pathname.includes("/coding"),
          icon: Settings,
          submenus: [
            {
              href: "/portal/assessment/coding",
              label: "All coding assessments",
              active: pathname === "/portal/assessment/coding",
            },
            {
              href: "/portal/assessment/coding/create",
              label: "Create coding assessment",
              active: pathname === "/portal/assessment/coding/create",
            },
          ],
        },
      ],
    },
  ]
}
