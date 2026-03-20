import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { name: "About Us", path: "/about-us" },
    { name: "How It Works", path: "/how-it-works" }, 
    { name: "Assessments", path: "#" },
    { name: "AI Plays a Role", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Contact", path: "#" }
  ];

  return (
    <nav className="bg-black text-white py-6 px-6 border-b-2 border-primary">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        {/* Logo and brand */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-wide">ASSESSCENTER.COM</h1>
          <p className="text-sm text-gray-300 mt-1">
            From Insight to Impact: Assess. Scale. Succeed.
          </p>
        </div>
        
        {/* Navigation links */}
        <div className="hidden lg:flex items-center gap-8 mt-2">
          {navItems.map((item, index) => {
            if (item.path.startsWith("/")) {
              return (
                <Link 
                  key={index}
                  to={item.path}
                  className="text-white hover:text-primary transition-colors text-base font-medium"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <a 
                key={index}
                href={item.path} 
                className="text-white hover:text-primary transition-colors text-base font-medium"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;