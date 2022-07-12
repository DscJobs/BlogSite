import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const themes = [
    {name: "dark"},
    //{name: "light"},
    {name: "dimmed"},
    //{name: "gold"},
    {name: "discord"},
    {name: "default"}
]

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    /**return(
        <div className="p-8 flex justify-between items-center font-bold text-xl text-th-primary-dark">
        <div>
          <select
            name="theme"
            id="theme-select"
            className="selection text-gray-800 border-gray-800 border py-1 px-3"
            onChange={(e) => setTheme(e.currentTarget.value)}
            value={theme}
          >
            <option value="" disabled>Theme Config</option>
            <hr className="break bg-white text-white" />
            {themes.map(t => (
              <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>{t.name}</option>
            )
            )}
          </select>
        </div>
      </div>
    )*/

    return(
      <div className="p-8 flex justify-between items-center font-bold text-xl txt-th-primary-dark">
        <div className="text-base text-white">
         <FontAwesomeIcon icon={["fas", "palette"]} className="text-gray-500" />
        <div className="flex flex-row flex-wrap items-center justify-center p-2">
          <button 
            aria-label="Toggle Themes" 
            type="button" 
            className="focus:outline-none bg-none bg-[#0F1A27] dark:bg-[#0E141D] rounded-lg p-3 h-10 w-10 flex items-center justify-center"
            onClick={() => setTheme('default') }>

          </button>
        </div>
       </div>
      </div>
    )
}

export default ThemeSwitch;
