import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  variant?: "header" | "footer" | "hero";
};

export function BrandLogo({ href, variant = "header" }: Props) {
  return (
    <Link
      className={`brand-logo brand-logo-${variant}`}
      href={href}
      aria-label="Maryem Nafidi — Data Science, AI et Software Engineering"
    >
      <>
        <Image
          className="brand-logo-light"
          src="/maryem-nafidi-logo-light.png"
          alt="Maryem Nafidi — Data Science × AI × Software Engineering"
          width={851}
          height={405}
          sizes={variant === "header" ? "132px" : variant === "footer" ? "122px" : "330px"}
          priority={variant === "header"}
        />
        <Image
          className="brand-logo-dark"
          src="/maryem-nafidi-logo-dark.png"
          alt=""
          aria-hidden="true"
          width={851}
          height={405}
          sizes={variant === "header" ? "132px" : variant === "footer" ? "122px" : "330px"}
        />
      </>
    </Link>
  );
}
