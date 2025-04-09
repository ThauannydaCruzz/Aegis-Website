
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Menu principal para funcionalidades extras - iremos usar para opções complementares
const MainMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Don't render menu on the index page
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="bg-transparent text-white/80 hover:text-white hover:bg-transparent focus:bg-transparent"
            >
              Opções
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => navigate('/security-dashboard')}
                    >
                      Dashboard
                    </Button>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => navigate('/aegis-team')}
                    >
                      Equipe
                    </Button>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => navigate('/chatbot')}
                    >
                      IA Segurança
                    </Button>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainMenu;
