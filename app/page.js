import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="text-cyan-600 underline hover:text-cyan-300">Week 2 Assignment</Link>
      <br></br>
      <Link href="./week-3/" className="text-cyan-600 underline hover:text-cyan-300">Week 3 Assignment</Link>
      <br></br>
      <Link href="./week-4/" className="text-cyan-600 underline hover:text-cyan-300">Week 4 Assignment</Link>
      <br></br>
      <Link href="./week-5/" className="text-cyan-600 underline hover:text-cyan-300">Week 5 Assignment</Link>
      <br></br>
      <Link href="./week-6/" className="text-cyan-600 underline hover:text-cyan-300">Week 6 Assignment</Link>
      <br></br>
      <Link href="./week-7/" className="text-cyan-600 underline hover:text-cyan-300">Week 7 Assignment</Link>
    </div>
  );
}
