import { useEffect, useState } from "react";

export function useHero() {
  const [nameText, setNameText] = useState("");
  const [roleText, setRoleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullName = "Gabriel Martins";
  const fullRole = "Desenvolvedor Fullstack";

  useEffect(() => {
    let nameIndex = 0;
    let roleIndex = 0;

    const nameInterval = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setNameText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameInterval);

        const roleInterval = setInterval(() => {
          if (roleIndex <= fullRole.length) {
            setRoleText(fullRole.slice(0, roleIndex));
            roleIndex++;
          } else {
            clearInterval(roleInterval);
          }
        }, 50);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(nameInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    nameText,
    roleText,
    showCursor,
    scrollToExperience,
    fullRole,
  }
}
