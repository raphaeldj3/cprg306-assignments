import Link from "next/link";

export default function StudentInfo() {
    return(
        <div>
            <p>Raphael de Jesus</p>
            <Link href="https://github.com/raphaeldj3/cprg306-assignments" className="text-cyan-600 underline hover:text-cyan-300">My Github Repository</Link>
        </div>
    );
}