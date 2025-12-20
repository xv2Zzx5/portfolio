import type { RefObject } from "react";
import type { UserInfo } from "../types";
import {gsap} from "gsap";

export  const userAnimation = (user: UserInfo, ref: RefObject<HTMLDivElement | null>) => {
        // Info & stack анимации
        const tl = gsap.timeline();
        tl.fromTo(
            ".info-item",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.in",
                stagger: 0.3,
            }
        );
        tl.fromTo(
            ".stack-item",
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "circ.in",
                stagger: 0.3,
            }
        );

        // Scramble-анимации
        const animateScramble = (selector: string, text: string) => {
            gsap.to(selector, {
                duration: 1,
                scrambleText: text,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });
        };

        animateScramble(".scramble-hi", "Hi");
        animateScramble(".scramble-Iam", "I am ");
        animateScramble(".scramble-name", user.name);
        animateScramble(".scramble-position", user.position);
    };