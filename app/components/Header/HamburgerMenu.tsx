"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./HamburgerMenu.module.scss";
import { useClickOutside } from "@/utils/hooks/useClickOutside";

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const toggleActiveClass = isActive ? styles.active : "";

  useClickOutside(buttonRef, () => {
    if (isActive) setIsActive(false);
  });

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("ham-menu-active");
    } else {
      document.body.classList.remove("ham-menu-active");
    }
  }, [isActive]);

  return (
    <div
      ref={buttonRef}
      onClick={() => setIsActive((prev) => !prev)}
      className={`${styles.hamburgerMenu} ${toggleActiveClass}`}
    >
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
    </div>
  );
};
export default HamburgerMenu;
