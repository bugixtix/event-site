"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link, Button } from "@heroui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <Navbar isMenuOpen={open} onMenuOpenChange={setOpen} maxWidth="xl" className="bg-black z-50 border-b p-4 fixed top-0 border-white/5 ">
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-[conic-gradient(from_0deg,#7c3aed,#ec4899,#22d3ee,#7c3aed)] hover:scale-110 hover:rotate-180 transition-all duration-500" />
            <span className="font-display text-xl tracking-widest">Nebula<span className="text-gradient text-xl font-bold tracking-widest px-1">26</span></span>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {items.map((i) => (
            <NavbarItem key={i.href}>
              <Link href={i.href} className="text-sm text-neutral-300 hover:text-white transition-colors">{i.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="md:flex">
            <Button as={Link} href="#tickets" radius="full" className="rounded-full transition-all duration-300 hover:bg-white bg-white/80 text-black font-medium md:flex hidden p-4 text-sm tracking-wider">Get tickets</Button>
          </NavbarItem>
          <NavbarMenuToggle className="hidden" />
        </NavbarContent>
        <NavbarMenu className="bg-black/95 pt-8">
          {items.map((i) => (
            <NavbarMenuItem key={i.href}>
              <Link href={i.href} className="text-2xl font-display" onPress={() => setOpen(false)}>{i.label}</Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button as={Link} href="#tickets"  className="p-4 bg-white text-black" onPress={() => setOpen(false)}>Get tickets</Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
