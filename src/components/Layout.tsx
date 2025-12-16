import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import logo from "@/assets/logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
            <div className="flex items-center h-14 px-4">
              <SidebarTrigger className="text-white hover:bg-white/10" />
              <img src={logo} alt="Hole Out Golf Logo" className="h-10 w-10 ml-4 rounded-full object-cover" />
              <span className="ml-3 text-white font-bold text-lg">Hole Out Golf</span>
            </div>
          </header>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
