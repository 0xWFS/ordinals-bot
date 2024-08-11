import Link from "next/link";

export function BackToHome() {
  return (
    <div className="mt-10">
      <Link href={'/'}>
        <p>{'<-'} Back Home</p>
      </Link>
    </div>
  );
}
