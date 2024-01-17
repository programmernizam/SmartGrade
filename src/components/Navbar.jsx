export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/">
          <span className="text-white font-bold text-2xl uppercase">SmartGrade   </span>
        </a>
        {/* Logo Ends  */}
        <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
}
